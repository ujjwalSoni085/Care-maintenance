const otpService = require('./otp.service');

class OtpController {
    /**
     * @desc    Generate OTP for a service request
     * @route   POST /api/v1/otp/generate
     * @access  Private
     */
    async generateOtp(req, res, next) {
        try {
            const { requestId } = req.body;

            if (!requestId) {
                const error = new Error('Service Request ID is required');
                error.statusCode = 400;
                throw error;
            }

            const otpRecord = await otpService.generateOtp(requestId);
            
            res.status(201).json({
                success: true,
                data: {
                    requestId: otpRecord.requestId,
                    expiresAt: otpRecord.expiresAt
                },
                message: 'OTP generated successfully'
            });
        } catch (error) {
            next(error);
        }
    }

    /**
     * @desc    Verify OTP for a service request
     * @route   POST /api/v1/otp/verify
     * @access  Private
     */
    async verifyOtp(req, res, next) {
        try {
            const { requestId, otp } = req.body;

            if (!requestId || !otp) {
                const error = new Error('Service Request ID and OTP are required');
                error.statusCode = 400;
                throw error;
            }

            const verifiedOtp = await otpService.verifyOtp(requestId, otp, req.user._id);
            
            res.status(200).json({
                success: true,
                data: verifiedOtp,
                message: 'OTP verified successfully and Request marked as Completed'
            });
        } catch (error) {
            if (['OTP not found for this request', 'OTP is already verified', 'OTP has expired', 'Invalid OTP'].includes(error.message)) {
                error.statusCode = 400;
            }
            next(error);
        }
    }

    /**
     * @desc    Resend OTP for a service request
     * @route   POST /api/v1/otp/resend
     * @access  Private
     */
    async resendOtp(req, res, next) {
        try {
            const { requestId } = req.body;

            if (!requestId) {
                const error = new Error('Service Request ID is required');
                error.statusCode = 400;
                throw error;
            }

            const otpRecord = await otpService.resendOtp(requestId);
            
            res.status(200).json({
                success: true,
                data: {
                    requestId: otpRecord.requestId,
                    expiresAt: otpRecord.expiresAt
                },
                message: 'A new OTP has been generated and sent'
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new OtpController();
