const User = require('../../models/User');
const ServiceRequest = require('../../models/ServiceRequest');
const { REQUEST_STATUS } = require('../request/request.constants');

class TechnicianRepository {
    async create(data) {
        return await User.create(data);
    }

    // Find all technicians
    async findAll(query = {}) {
        return await User.find({ role: 'technician', ...query }).select('-password');
    }

    // Find technician by ID
    async findById(id) {
        return await User.findOne({ _id: id, role: 'technician' }).select('-password');
    }

    // Find technician by email
    async findByEmail(email) {
        return await User.findOne({ email, role: 'technician' }).select('-password');
    }

    // Find assigned jobs
    async findAssignedJobs(technicianId) {
        return await ServiceRequest.find({
            assignedTo: technicianId,
            status: { $nin: [REQUEST_STATUS.COMPLETED, REQUEST_STATUS.CANCELLED] }
        });
    }

    // Find completed jobs
    async findCompletedJobs(technicianId) {
        return await ServiceRequest.find({
            assignedTo: technicianId,
            status: REQUEST_STATUS.COMPLETED
        });
    }

    // Update technician availability
    async updateAvailability(id, availability) {
        return await User.findOneAndUpdate(
            { _id: id, role: 'technician' },
            { availability },
            { new: true, runValidators: true }
        ).select('-password');
    }

    // Update technician profile
    async updateProfile(id, updateData) {
        
        return await User.findOneAndUpdate(
            { _id: id, role: 'technician' },
            updateData,
            { new: true, runValidators: true }
        ).select('-password');
    }

    // Alias for controller update method
    async update(id, updateData) {
        return this.updateProfile(id, updateData);
    }

    async delete(id) {
        return await User.findOneAndDelete({ _id: id, role: 'technician' });
    }
}

module.exports = new TechnicianRepository();
