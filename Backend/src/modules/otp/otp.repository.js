const OTP = require('../../models/OTP');

class OtpRepository {
    async create(data) {
        return await OTP.create(data);
    }

    async findByRequestId(requestId) {
        return await OTP.findOne({ requestId }).sort({ createdAt: -1 });
    }

    async findByCode(otp) {
        return await OTP.findOne({ otp }).sort({ createdAt: -1 });
    }

    async update(id, data) {
        return await OTP.findByIdAndUpdate(id, data, {
            new: true,
            runValidators: true,
        });
    }

    async deleteExpired(currentDate) {
        return await OTP.deleteMany({ expiresAt: { $lt: currentDate } });
    }
}

module.exports = new OtpRepository();
