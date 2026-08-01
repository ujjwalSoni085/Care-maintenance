const express = require('express');
const router = express.Router();
const requestController = require('./request.controller');
const authenticate = require('../../middleware/authenticate');
const authorize = require('../../middleware/authorize');
const validate = require('../../middleware/validate');
const {
    createRequestValidation,
    updateRequestValidation,
    assignTechnicianValidation,
    updateStatusValidation,
    getRequestByIdValidation,
    deleteRequestValidation
} = require('./request.validation');

// Apply authentication middleware to all request routes
router.use(authenticate);

// Request endpoints
router.route('/')
    .get(authorize('admin'), requestController.getRequests)
    .post(authorize('admin'), validate(createRequestValidation), requestController.createRequest);

router.route('/:id')
    .get(validate(getRequestByIdValidation), requestController.getRequestById)
    .put(validate(updateRequestValidation), requestController.updateRequest)
    .delete(authorize('admin'), validate(deleteRequestValidation), requestController.deleteRequest);

// Specific actions endpoints
router.put(
    '/:id/assign', 
    authorize('admin'), // Assuming only admins can assign technicians
    validate(assignTechnicianValidation),
    requestController.assignTechnician
);

router.put(
    '/:id/status', 
    authorize('technician'),
    validate(updateStatusValidation),
    requestController.updateStatus
);

module.exports = router;
