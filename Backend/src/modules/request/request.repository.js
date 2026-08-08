const ServiceRequest = require('../../models/ServiceRequest');

class RequestRepository {
    async create(data) {
        return await ServiceRequest.create(data);
    }

    async findById(id) {
        return await ServiceRequest.findById(id);
    }

    async findAll(query = {}) {
        return await ServiceRequest.find(query);
    }

    async findAllWithTechnician(filter = {}) {
        return await ServiceRequest.find(filter)
            .populate('assignedTo')
            .sort({ updatedAt: -1 });
    }

    async update(id, data) {
        return await ServiceRequest.findByIdAndUpdate(id, data, {
            new: true,
            runValidators: true,
        });
    }

    async delete(id) {
        return await ServiceRequest.findByIdAndDelete(id);
    }

    async assignTechnician(id, technicianId) {
        return await ServiceRequest.findByIdAndUpdate(
            id,
            { assignedTo: technicianId, assignedAt: new Date() },
            { new: true, runValidators: true }
        );
    }

    async updateStatus(id, status) {
        return await ServiceRequest.findByIdAndUpdate(
            id,
            { status },
            { new: true, runValidators: true }
        );
    }
}

module.exports = new RequestRepository();
