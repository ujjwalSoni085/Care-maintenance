Authorization
Objective

Implement Role-Based Access Control (RBAC) for the new Field Service Management (FSM) modules by reusing the existing authentication middleware and adding role-based authorization.

Note: This phase applies only to the new FSM modules:

Request
Technician
OTP
Notification

Existing website modules (Auth, Blog, Feedback, Contact, Payment, Upload, User) are not modified during this phase.

Authorization Flow

Every protected request should follow this flow:

Client Request
      │
      ▼
JWT Authentication Middleware
      │
      ▼
Role Authorization Middleware
      │
      ▼
Validation Middleware
      │
      ▼
Controller
      │
      ▼
Service
      │
      ▼
Repository
      │
      ▼
MongoDB


Authorization Rules

Admin

Create Request

Assign Technician

Delete Request

View All Requests

View All Technicians

Manage Requests
Technician
View My Jobs

Update Status

Verify OTP

View History

Update Availability
Folder Structure
src/
│
├── middleware/
│   ├── auth.middleware.js      (Existing)
│   └── authorize.js            (New)
│
├── modules/
│   ├── request/
│   ├── technician/
│   ├── otp/
│   └── notification/
Security Rules
Every protected endpoint must require a valid JWT.
Every endpoint must verify the user's role before executing business logic.
Technicians must never access another technician's jobs.
Admins have full control over request management.
Authorization should happen before validation, controller, and service execution.
Development Order
1. Reuse existing auth middleware
        ↓
2. Create authorize.js middleware
        ↓
3. Protect Request routes
        ↓
4. Protect Technician routes
        ↓
5. Protect OTP routes
        ↓
6. Protect Notification routes
Phase 9 Goal

By the end of this phase:

✅ JWT authentication protects all FSM APIs.
✅ Role-based authorization is enforced using ADMIN and TECHNICIAN roles.
✅ Admin-only operations cannot be accessed by technicians.
✅ Technicians can only access and modify their own resources.
✅ The FSM backend is secure and ready for integration with the React Native application.

