const otpRepository = require('./otp.repository');
const requestRepository = require('../request/request.repository');
const { REQUEST_STATUS } = require('../request/request.constants');

class OtpService {
    /**
     * Generate OTP for a service request
     */
    async generateOtp(requestId) {
        // Invalidate or delete any existing unverified OTP for this request
        // (Optional based on business logic, but good practice. We can skip it 
        // if we just want to create a new one, as findByRequestId gets the latest)

        // Generate a random 6-digit OTP
        const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
        
        // Set expiration time to 10 minutes from now
        const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

        const otpData = {
            requestId,
            otp: otpCode,
            expiresAt
        };

        // Save OTP
        const newOtp = await otpRepository.create(otpData);
        
        // Trigger OTP generation notification
        const request = await requestRepository.findById(requestId);
        if (request && request.createdBy) {
            const notificationService = require('../notification/notification.service');
            await notificationService.triggerOtpGenerated(request.createdBy, requestId);

            // Fetch user to get their phone number and send SMS
            try {
                const User = require('../../models/User');
                const user = await User.findById(request.createdBy);
                
                if (user && user.phone) {
                    const smsUtils = require('../../utils/sms.utils');
                    await smsUtils.sendSMS(
                        user.phone,
                        `Your OTP for CareMS service request is: ${otpCode}. It is valid for 10 minutes.`
                    );
                } else {
                    console.warn(`Could not send SMS: User ${request.createdBy} has no phone number.`);
                }
            } catch (error) {
                console.error('Error while sending OTP SMS:', error);
            }
        }

        // Return the saved OTP
        return newOtp;
    }

    /**
     * Verify OTP for a service request
     */
    async verifyOtp(requestId, otpCode, technicianId) {
        // Find the most recent OTP by Request ID
        const otpRecord = await otpRepository.findByRequestId(requestId);

        if (!otpRecord) {
            throw new Error('OTP not found for this request');
        }

        // Fetch related ServiceRequest
        const request = await requestRepository.findById(requestId);
        if (!request) {
            const error = new Error('Service Request not found');
            error.statusCode = 404;
            throw error;
        }

        // Verify that the logged-in technician is assigned to this request
        if (!request.assignedTo || request.assignedTo.toString() !== technicianId.toString()) {
            const error = new Error('You are not authorized to verify OTP for this request');
            error.statusCode = 403;
            throw error;
        }

        // Prevent reuse of verified OTPs
        if (otpRecord.verified) {
            throw new Error('OTP is already verified');
        }

        // Check if OTP has expired
        if (new Date() > otpRecord.expiresAt) {
            throw new Error('OTP has expired');
        }

        // Verify the code
        if (otpRecord.otp !== otpCode) {
            throw new Error('Invalid OTP');
        }

        // Mark OTP as verified
        const updatedOtp = await otpRepository.update(otpRecord._id, {
            verified: true,
            verifiedAt: new Date()
        });

        // Update related ServiceRequest status to Completed
        await requestRepository.updateStatus(requestId, REQUEST_STATUS.COMPLETED);

        // Trigger OTP and Completed notifications
        if (request) {
            const notificationService = require('../notification/notification.service');
            await notificationService.triggerOtpVerified(request.createdBy, requestId);
            await notificationService.triggerJobCompleted(request.createdBy, requestId);
        }

        return updatedOtp;
    }

    /**
     * Resend OTP for a service request
     * Basically invalidates/ignores old and generates a new one
     */
    async resendOtp(requestId) {
        // Simply generate a new OTP for the request.
        // The repository's findByRequestId gets the most recently created OTP.
        return await this.generateOtp(requestId);
    }
}

module.exports = new OtpService();
