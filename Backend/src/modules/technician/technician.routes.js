const express = require('express');
const router = express.Router();
const technicianController = require('./technician.controller');
const authenticate = require('../../middleware/authenticate');
const authorize = require('../../middleware/authorize');
const validate = require('../../middleware/validate');
const {
    getTechnicianByIdValidation,
    deleteTechnicianValidation,
    createTechnicianValidation,
    updateTechnicianValidation,
    updateAvailabilityValidation
} = require('./technician.validation');

// Apply authentication middleware to all technician routes when ready
router.use(authenticate);

// Specific routes first to prevent :id from catching them
router.get('/my-jobs', authorize('technician'), technicianController.getAssignedJobs);
router.get('/history', authorize('technician'), technicianController.getCompletedJobs);
router.put('/profile', authorize('technician'), validate(updateTechnicianValidation), technicianController.updateTechnician);
router.put('/availability', authorize('technician'), validate(updateAvailabilityValidation), technicianController.updateAvailability);

router.route('/')
    .get(authorize('admin'), technicianController.getTechnicians)
    .post(authorize('admin'), validate(createTechnicianValidation), technicianController.createTechnician);

router.route('/:id')
    .get(authorize('admin'), validate(getTechnicianByIdValidation), technicianController.getTechnicianById)
    .put(authorize('admin'), validate(updateTechnicianValidation), technicianController.updateTechnician)
    .delete(authorize('admin'), validate(deleteTechnicianValidation), technicianController.deleteTechnician);

module.exports = router;
