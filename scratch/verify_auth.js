const path = require('path');
const assert = require('assert');

// Configure environment variable for JWT secret
process.env.JWT_SECRET = 'test_secret';

// Mock mongoose models and repositories to avoid database connections
const requestRepository = require('../Backend/src/modules/request/request.repository');
const otpRepository = require('../Backend/src/modules/otp/otp.repository');
const notificationService = require('../Backend/src/modules/notification/notification.service');

// Mock notification service methods to avoid DB validations
notificationService.triggerOtpVerified = async () => { console.log('Mock notification triggerOtpVerified'); };
notificationService.triggerJobCompleted = async () => { console.log('Mock notification triggerJobCompleted'); };

// 1. Mock RequestRepository methods using valid 24-character hex ObjectIds
const mockRequests = {};
requestRepository.findById = async (id) => {
    return mockRequests[id] || null;
};
requestRepository.updateStatus = async (id, status) => {
    if (mockRequests[id]) {
        mockRequests[id].status = status;
        return mockRequests[id];
    }
    return null;
};

// 2. Mock OtpRepository methods
const mockOtps = {};
otpRepository.findByRequestId = async (requestId) => {
    return mockOtps[requestId] || null;
};
otpRepository.update = async (id, data) => {
    for (const key in mockOtps) {
        if (mockOtps[key]._id.toString() === id.toString()) {
            Object.assign(mockOtps[key], data);
            return mockOtps[key];
        }
    }
    return null;
};

// Import controllers, services, and middlewares to test
const authorizeMiddleware = require('../Backend/src/middleware/authorize');
const requestController = require('../Backend/src/modules/request/request.controller');
const otpService = require('../Backend/src/modules/otp/otp.service');

// Helper to create mock Express response object
function createMockResponse() {
    const res = {
        statusCode: 200,
        status: function(code) {
            this.statusCode = code;
            return this;
        },
        json: function(data) {
            this.jsonData = data;
            return this;
        }
    };
    return res;
}

// Helper to run authorization middleware
function runAuth(middleware, userRole, allowedRoles) {
    const req = { user: { role: userRole } };
    const res = createMockResponse();
    let nextCalled = false;
    const next = () => { nextCalled = true; };

    middleware(...allowedRoles)(req, res, next);
    return { res, nextCalled };
}

// ----------------------------------------------------
// TEST SUITE
// ----------------------------------------------------
async function runTests() {
    console.log('--- Starting Auth & Authorization Verification Tests ---');

    // Valid 24-character hex ObjectIds for database models
    const mockReqId = '60c72b2f9b1d8b2bad034a11';
    const mockTechId1 = '60c72b2f9b1d8b2bad034a22';
    const mockTechId2 = '60c72b2f9b1d8b2bad034a33';
    const mockCustId1 = '60c72b2f9b1d8b2bad034a44';
    const mockCustId2 = '60c72b2f9b1d8b2bad034a55';
    const mockOtpId = '60c72b2f9b1d8b2bad034a66';

    // ==========================================
    // 1. Test authorize middleware case-insensitivity
    // ==========================================
    console.log('Testing authorize middleware case-insensitivity...');
    
    // Exact match lowercase
    const t1 = runAuth(authorizeMiddleware, 'admin', ['admin']);
    assert.strictEqual(t1.nextCalled, true, 'Lowercase role exact match should succeed');

    // Case mismatch user role uppercase
    const t2 = runAuth(authorizeMiddleware, 'ADMIN', ['admin']);
    assert.strictEqual(t2.nextCalled, true, 'Uppercase user role should match lowercase allowed role');

    // Case mismatch allowed role uppercase
    const t3 = runAuth(authorizeMiddleware, 'technician', ['TECHNICIAN']);
    assert.strictEqual(t3.nextCalled, true, 'Lowercase user role should match uppercase allowed role');

    // Allowed roles list mismatch
    const t4 = runAuth(authorizeMiddleware, 'customer', ['admin', 'technician']);
    assert.strictEqual(t4.nextCalled, false, 'Non-allowed role should fail');
    assert.strictEqual(t4.res.statusCode, 403, 'Should return 403 status code');
    assert.strictEqual(t4.res.jsonData.success, false);

    console.log('✅ authorize middleware tests passed');

    // ==========================================
    // 2. Test requestController.getRequestById ownership check
    // ==========================================
    console.log('Testing requestController.getRequestById ownership checks...');

    mockRequests[mockReqId] = {
        _id: mockReqId,
        clientName: 'John Doe',
        assignedTo: mockTechId1,
        createdBy: mockCustId1
    };

    // Admin should see any request
    const adminRes = createMockResponse();
    await requestController.getRequestById(
        { params: { id: mockReqId }, user: { _id: '60c72b2f9b1d8b2bad034a99', role: 'admin' } },
        adminRes,
        (err) => { if (err) throw err; }
    );
    assert.strictEqual(adminRes.statusCode, 200);
    assert.strictEqual(adminRes.jsonData.success, true);

    // Assigned Technician should see request
    const techSuccessRes = createMockResponse();
    await requestController.getRequestById(
        { params: { id: mockReqId }, user: { _id: mockTechId1, role: 'technician' } },
        techSuccessRes,
        (err) => { if (err) throw err; }
    );
    assert.strictEqual(techSuccessRes.statusCode, 200);
    assert.strictEqual(techSuccessRes.jsonData.success, true);

    // Unassigned Technician should be blocked (403)
    const techFailRes = createMockResponse();
    await requestController.getRequestById(
        { params: { id: mockReqId }, user: { _id: mockTechId2, role: 'technician' } },
        techFailRes,
        (err) => { if (err) throw err; }
    );
    assert.strictEqual(techFailRes.statusCode, 403);
    assert.strictEqual(techFailRes.jsonData.success, false);
    assert.ok(techFailRes.jsonData.message.includes('not authorized'));

    // Creator Customer should see request
    const custSuccessRes = createMockResponse();
    await requestController.getRequestById(
        { params: { id: mockReqId }, user: { _id: mockCustId1, role: 'customer' } },
        custSuccessRes,
        (err) => { if (err) throw err; }
    );
    assert.strictEqual(custSuccessRes.statusCode, 200);

    // Unrelated Customer should be blocked (403)
    const custFailRes = createMockResponse();
    await requestController.getRequestById(
        { params: { id: mockReqId }, user: { _id: mockCustId2, role: 'customer' } },
        custFailRes,
        (err) => { if (err) throw err; }
    );
    assert.strictEqual(custFailRes.statusCode, 403);

    console.log('✅ requestController.getRequestById ownership tests passed');

    // ==========================================
    // 3. Test requestController.updateStatus ownership check
    // ==========================================
    console.log('Testing requestController.updateStatus ownership checks...');

    // Mock the state transition verification to bypass status limits
    const requestService = require('../Backend/src/modules/request/request.service');
    requestService.changeStatus = async (id, status) => {
        return { ...mockRequests[id], status };
    };

    // Assigned Technician can update status
    const statusSuccessRes = createMockResponse();
    await requestController.updateStatus(
        { params: { id: mockReqId }, body: { status: 'ON_THE_WAY' }, user: { _id: mockTechId1, role: 'technician' } },
        statusSuccessRes,
        (err) => { if (err) throw err; }
    );
    assert.strictEqual(statusSuccessRes.statusCode, 200);

    // Unassigned Technician cannot update status (403)
    const statusFailRes = createMockResponse();
    await requestController.updateStatus(
        { params: { id: mockReqId }, body: { status: 'ON_THE_WAY' }, user: { _id: mockTechId2, role: 'technician' } },
        statusFailRes,
        (err) => { if (err) throw err; }
    );
    assert.strictEqual(statusFailRes.statusCode, 403);

    console.log('✅ requestController.updateStatus ownership tests passed');

    // ==========================================
    // 4. Test otpService.verifyOtp ownership check
    // ==========================================
    console.log('Testing otpService.verifyOtp ownership checks...');

    const mockOtpReqId = '60c72b2f9b1d8b2bad034a77';
    mockRequests[mockOtpReqId] = {
        _id: mockOtpReqId,
        assignedTo: mockTechId1,
        createdBy: mockCustId1
    };
    mockOtps[mockOtpReqId] = {
        _id: mockOtpId,
        requestId: mockOtpReqId,
        otp: '123456',
        verified: false,
        expiresAt: new Date(Date.now() + 1000 * 60 * 10) // 10 mins from now
    };

    // Assigned Technician verifies OTP successfully
    const otpVerifySuccess = await otpService.verifyOtp(mockOtpReqId, '123456', mockTechId1);
    assert.strictEqual(otpVerifySuccess.verified, true);

    // Reset verification flag for next check
    mockOtps[mockOtpReqId].verified = false;

    // Unassigned Technician verification fails with 403 error
    try {
        await otpService.verifyOtp(mockOtpReqId, '123456', mockTechId2);
        assert.fail('Should have failed verification check for unassigned technician');
    } catch (err) {
        assert.strictEqual(err.statusCode, 403);
        assert.ok(err.message.includes('not authorized'));
    }

    console.log('✅ otpService.verifyOtp ownership tests passed');
    console.log('\n🎉 ALL VERIFICATION TESTS PASSED SUCCESSFULLY! 🎉');
}

runTests().catch(err => {
    console.error('❌ Test failed with error:', err);
    process.exit(1);
});
