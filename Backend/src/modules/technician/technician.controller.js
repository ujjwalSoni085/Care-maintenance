const technicianService = require('./technician.service');

class TechnicianController {
    /**
     * @desc    Create a new technician
     * @route   POST /api/v1/technicians
     * @access  Private (Admin)
     */
    async createTechnician(req, res, next) {
        try {
            const newTechnician = await technicianService.createTechnician(req.user, req.body);
            
            res.status(201).json({
                success: true,
                data: newTechnician
            });
        } catch (error) {
            next(error);
        }
    }

    /**
     * @desc    Get all technicians
     * @route   GET /api/v1/technicians
     * @access  Private
     */
    async getTechnicians(req, res, next) {
        try {
            const technicians = await technicianService.getTechnicians(req.user, req.query);
            
            res.status(200).json({
                success: true,
                count: technicians.length,
                data: technicians
            });
        } catch (error) {
            next(error);
        }
    }

    /**
     * @desc    Get single technician by ID
     * @route   GET /api/v1/technicians/:id
     * @access  Private
     */
    async getTechnicianById(req, res, next) {
        try {
            const technician = await technicianService.getTechnicianById(req.user, req.params.id);
            
            res.status(200).json({
                success: true,
                data: technician
            });
        } catch (error) {
            next(error);
        }
    }

    /**
     * @desc    Get assigned jobs for a technician
     * @route   GET /api/v1/technicians/:id/jobs/assigned
     * @access  Private
     */
    async getAssignedJobs(req, res, next) {
        try {
            const id = req.params.id || (req.user && req.user.id);
            const jobs = await technicianService.getAssignedJobs(req.user, id);
            
            res.status(200).json({
                success: true,
                count: jobs.length,
                data: jobs
            });
        } catch (error) {
            next(error);
        }
    }

    /**
     * @desc    Get completed jobs for a technician
     * @route   GET /api/v1/technicians/:id/jobs/completed
     * @access  Private
     */
    async getCompletedJobs(req, res, next) {
        try {
            const id = req.params.id || (req.user && req.user.id);
            const jobs = await technicianService.getCompletedJobs(req.user, id);
            
            res.status(200).json({
                success: true,
                count: jobs.length,
                data: jobs
            });
        } catch (error) {
            next(error);
        }
    }

    /**
     * @desc    Update a technician's availability
     * @route   PUT /api/v1/technicians/:id/availability
     * @access  Private (Technician only)
     */
    async updateAvailability(req, res, next) {
        try {
            const { availability } = req.body;
            if (!availability) {
                const error = new Error('Please provide availability status');
                error.statusCode = 400;
                throw error;
            }

            const id = req.params.id || (req.user && req.user.id);
            const updatedTechnician = await technicianService.updateAvailability(req.user, id, availability);
            
            res.status(200).json({
                success: true,
                data: updatedTechnician
            });
        } catch (error) {
            next(error);
        }
    }

    /**
     * @desc    Update a technician profile
     * @route   PUT /api/v1/technicians/:id
     * @access  Private
     */
    async updateTechnician(req, res, next) {
        try {
            const id = req.params.id || (req.user && req.user.id);
            const updatedTechnician = await technicianService.updateProfile(req.user, id, req.body);
            
            res.status(200).json({
                success: true,
                data: updatedTechnician
            });
        } catch (error) {
            next(error);
        }
    }

    /**
     * @desc    Delete a technician
     * @route   DELETE /api/v1/technicians/:id
     * @access  Private (Admin)
     */
    async deleteTechnician(req, res, next) {
        try {
            await technicianService.deleteTechnician(req.user, req.params.id);
            
            res.status(200).json({
                success: true,
                data: {}
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new TechnicianController();
