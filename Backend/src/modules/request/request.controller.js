const requestService = require('./request.service');

class RequestController {
    /**
     * @desc    Create a new service request
     * @route   POST /api/v1/requests
     * @access  Private
     */
    async createRequest(req, res, next) {
        try {
            // Attach the creator ID to the request data if available from auth middleware
            const requestData = {
                ...req.body,
            };
            
            if (req.user && req.user._id) {
                requestData.createdBy = req.user._id;
            }

            const newRequest = await requestService.createRequest(requestData);
            
            res.status(201).json({
                success: true,
                data: newRequest
            });
        } catch (error) {
            next(error);
        }
    }

    /**
     * @desc    Get all service requests
     * @route   GET /api/v1/requests
     * @access  Private
     */
    async getRequests(req, res, next) {
        try {
            // req.query can be used for filtering, sorting, pagination
            const requests = await requestService.getRequests(req.query);
            
            res.status(200).json({
                success: true,
                count: requests.length,
                data: requests
            });
        } catch (error) {
            next(error);
        }
    }

    /**
     * @desc    Get single service request by ID
     * @route   GET /api/v1/requests/:id
     * @access  Private
     */
    async getRequestById(req, res, next) {
        try {
            const request = await requestService.getRequestById(req.params.id);
            
            // Check authorization based on user role
            const userRole = (req.user.role || '').toLowerCase();
            if (userRole === 'technician') {
                if (!request.assignedTo || request.assignedTo.toString() !== req.user._id.toString()) {
                    return res.status(403).json({
                        success: false,
                        message: 'You are not authorized to view this request as you are not the assigned technician'
                    });
                }
            } else if (userRole === 'customer') {
                if (!request.createdBy || request.createdBy.toString() !== req.user._id.toString()) {
                    return res.status(403).json({
                        success: false,
                        message: 'You are not authorized to view this request'
                    });
                }
            } else if (userRole !== 'admin') {
                return res.status(403).json({
                    success: false,
                    message: 'Not authorized to access this route'
                });
            }

            res.status(200).json({
                success: true,
                data: request
            });
        } catch (error) {
            next(error);
        }
    }

    /**
     * @desc    Update a service request
     * @route   PUT /api/v1/requests/:id
     * @access  Private
     */
    async updateRequest(req, res, next) {
        try {
            const updatedRequest = await requestService.updateRequest(req.params.id, req.body);
            
            res.status(200).json({
                success: true,
                data: updatedRequest
            });
        } catch (error) {
            next(error);
        }
    }

    /**
     * @desc    Delete a service request
     * @route   DELETE /api/v1/requests/:id
     * @access  Private
     */
    async deleteRequest(req, res, next) {
        try {
            await requestService.deleteRequest(req.params.id);
            
            res.status(200).json({
                success: true,
                data: {}
            });
        } catch (error) {
            next(error);
        }
    }

    /**
     * @desc    Assign technician to a request
     * @route   PUT /api/v1/requests/:id/assign
     * @access  Private (Admin/Manager)
     */
    async assignTechnician(req, res, next) {
        try {
            const { technicianId } = req.body;
            
            if (!technicianId) {
                const error = new Error('Please provide a technician ID');
                error.statusCode = 400;
                throw error;
            }

            const updatedRequest = await requestService.assignTechnician(req.params.id, technicianId);
            
            res.status(200).json({
                success: true,
                data: updatedRequest
            });
        } catch (error) {
            // Set bad request status for validation errors from service
            if (error.message.includes('Cannot assign') || error.message.includes('not found')) {
                error.statusCode = 400;
            }
            next(error);
        }
    }

    /**
     * @desc    Update status of a request
     * @route   PUT /api/v1/requests/:id/status
     * @access  Private
     */
    async updateStatus(req, res, next) {
        try {
            const { status } = req.body;
            
            if (!status) {
                const error = new Error('Please provide a status');
                error.statusCode = 400;
                throw error;
            }

            // Fetch request to verify assigned technician
            const request = await requestService.getRequestById(req.params.id);
            if (!request.assignedTo || request.assignedTo.toString() !== req.user._id.toString()) {
                return res.status(403).json({
                    success: false,
                    message: 'You are not authorized to update the status of this request'
                });
            }

            const updatedRequest = await requestService.changeStatus(req.params.id, status);
            
            res.status(200).json({
                success: true,
                data: updatedRequest
            });
        } catch (error) {
            // Set bad request status for transition errors from service
            if (error.message.includes('Invalid status') || error.message.includes('not found')) {
                error.statusCode = 400;
            }
            next(error);
        }
    }
}

module.exports = new RequestController();
