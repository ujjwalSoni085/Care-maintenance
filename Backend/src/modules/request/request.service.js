const requestRepository = require('./request.repository');
const { REQUEST_STATUS } = require('./request.constants');
const technicianRepository = require('../technician/technician.repository');
const notificationService = require('../notification/notification.service');

class RequestService {
    /**
     * Create a new service request
     * @param {Object} data 
     * @returns {Object} Created request
     */
    async createRequest(data) {
        // Additional business logic before creation can go here (e.g. validation, pricing)
        const request = await requestRepository.create(data);
        
        // TODO: Generate notifications (e.g. notify admins of new request)
        
        return request;
    }

    /**
     * Get all assigned requests (work progress tracking)
     * @param {Object} query
     * @returns {Array} Array of requests
     */
    async getProgress(query = {}) {
        const filter = {
            assignedTo: { $exists: true, $ne: null }
        };

        const normalizeStatus = (statusStr) => {
            if (!statusStr) return null;
            const clean = statusStr.toUpperCase().replace(/[\s_-]/g, '');
            const statusMap = {
                'ASSIGNED': 'Assigned',
                'ONTHEWAY': 'OnTheWay',
                'WORKING': 'Working',
                'WAITINGOTP': 'WaitingOTP',
                'COMPLETED': 'Completed',
                'CANCELLED': 'Cancelled'
            };
            return statusMap[clean] || statusStr;
        };

        if (query.status) {
            const normalized = normalizeStatus(query.status);
            if (normalized) {
                filter.status = normalized;
            } else {
                filter.status = { $in: ['Assigned', 'OnTheWay', 'Working', 'WaitingOTP', 'Completed', 'Cancelled'] };
            }
        } else {
            filter.status = { $in: ['Assigned', 'OnTheWay', 'Working', 'WaitingOTP', 'Completed', 'Cancelled'] };
        }

        return await requestRepository.findAllWithTechnician(filter);
    }

    /**
     * Get all service requests
     * @param {Object} query 
     * @returns {Array} Array of requests
     */
    async getRequests(query) {
        return await requestRepository.findAll(query);
    }

    /**
     * Get single service request by ID
     * @param {String} id 
     * @returns {Object} Found request
     */
    async getRequestById(id) {
        const request = await requestRepository.findById(id);
        if (!request) {
            const error = new Error('Service Request not found');
            error.statusCode = 404;
            throw error;
        }
        return request;
    }

    /**
     * Update a service request
     * @param {String} id 
     * @param {Object} data 
     * @returns {Object} Updated request
     */
    async updateRequest(id, data) {
        const updatedRequest = await requestRepository.update(id, data);
        if (!updatedRequest) {
            const error = new Error('Service Request not found');
            error.statusCode = 404;
            throw error;
        }
        return updatedRequest;
    }

    /**
     * Delete a service request
     * @param {String} id 
     * @returns {Object} Deleted request
     */
    async deleteRequest(id) {
        const deletedRequest = await requestRepository.delete(id);
        if (!deletedRequest) {
            const error = new Error('Service Request not found');
            error.statusCode = 404;
            throw error;
        }
        return deletedRequest;
    }

    /**
     * Assign a technician to a request
     * @param {String} requestId 
     * @param {String} technicianId 
     * @returns {Object} Updated request
     */
    async assignTechnician(requestId, technicianId) {
        const request = await requestRepository.findById(requestId);
        
        if (!request) {
            throw new Error('Service Request not found');
        }

        // Prevent assigning completed or cancelled jobs
        if (
            request.status === REQUEST_STATUS.COMPLETED || 
            request.status === REQUEST_STATUS.CANCELLED
        ) {
            throw new Error(`Cannot assign technician to a ${request.status.toLowerCase()} request`);
        }

        // Note: additional checks can go here, e.g. checking if technicianId is valid/available
        const technician = await technicianRepository.findById(technicianId);
        if (!technician) {
            const error = new Error('Technician not found');
            error.statusCode = 404;
            throw error;
        }

        // Assign technician
        const updatedRequest = await requestRepository.assignTechnician(requestId, technicianId);
        
        // Transition status if it is pending
        if (request.status === REQUEST_STATUS.PENDING) {
            await this.changeStatus(requestId, REQUEST_STATUS.ASSIGNED);
            updatedRequest.status = REQUEST_STATUS.ASSIGNED;
        }

        // Generate notifications
        const technicianName = technician.name || technician.firstName || 'A technician';
        await notificationService.triggerRequestAssigned(request.createdBy, requestId, technicianName);
        
        return updatedRequest;
    }

    /**
     * Change the status of a request
     * @param {String} requestId 
     * @param {String} newStatus 
     * @returns {Object} Updated request
     */
    async changeStatus(requestId, newStatus) {
        const request = await requestRepository.findById(requestId);
        
        if (!request) {
            throw new Error('Service Request not found');
        }

        // Validate state transitions
        this.validateStatusTransition(request.status, newStatus);

        const updatedRequest = await requestRepository.updateStatus(requestId, newStatus);

        // Generate OTP when status transitions to WAITING_OTP
        if (newStatus === REQUEST_STATUS.WAITING_OTP) {
            await this.generateOTP(requestId);
        }

        // Generate notifications based on status change
        if (newStatus === REQUEST_STATUS.COMPLETED) {
            await notificationService.triggerJobCompleted(request.createdBy, requestId);
        } else if (newStatus === REQUEST_STATUS.CANCELLED) {
            await notificationService.triggerJobCancelled(request.createdBy, requestId, 'Cancelled by user or admin');
        }
        
        return updatedRequest;
    }

    /**
     * Validate if a status transition is allowed
     * @param {String} currentStatus 
     * @param {String} newStatus 
     */
    validateStatusTransition(currentStatus, newStatus) {
        const validTransitions = {
            [REQUEST_STATUS.PENDING]: [REQUEST_STATUS.ASSIGNED, REQUEST_STATUS.CANCELLED],
            [REQUEST_STATUS.ASSIGNED]: [REQUEST_STATUS.ON_THE_WAY, REQUEST_STATUS.CANCELLED],
            [REQUEST_STATUS.ON_THE_WAY]: [REQUEST_STATUS.WORKING, REQUEST_STATUS.CANCELLED],
            [REQUEST_STATUS.WORKING]: [REQUEST_STATUS.WAITING_OTP, REQUEST_STATUS.CANCELLED],
            [REQUEST_STATUS.WAITING_OTP]: [REQUEST_STATUS.COMPLETED, REQUEST_STATUS.CANCELLED],
            [REQUEST_STATUS.COMPLETED]: [],
            [REQUEST_STATUS.CANCELLED]: [],
        };

        const allowedNext = validTransitions[currentStatus] || [];
        
        if (!allowedNext.includes(newStatus)) {
            throw new Error(`Invalid status transition from ${currentStatus} to ${newStatus}`);
        }
    }

    /**
     * Generate OTP for request
     * @param {String} requestId 
     */
    async generateOTP(requestId) {
        const otpService = require('../otp/otp.service');
        return await otpService.generateOtp(requestId);
    }
}

module.exports = new RequestService();
