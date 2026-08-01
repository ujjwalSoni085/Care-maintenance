const REQUEST_STATUS = {
    PENDING: 'Pending',
    ASSIGNED: 'Assigned',
    ON_THE_WAY: 'OnTheWay',
    WORKING: 'Working',
    WAITING_OTP: 'WaitingOTP',
    COMPLETED: 'Completed',
    CANCELLED: 'Cancelled'
};

const REQUEST_PRIORITY = {
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: 'High',
    EMERGENCY: 'Emergency'
};

const SERVICE_CATEGORIES = {
    ELECTRICIAN: 'Electrician',
    PLUMBER: 'Plumber',
    CARPENTER: 'Carpenter',
    PAINTER: 'Painter',
    AC: 'AC',
    CLEANING: 'Cleaning',
    PEST_CONTROL: 'Pest Control'
};

module.exports = {
    REQUEST_STATUS,
    REQUEST_PRIORITY,
    SERVICE_CATEGORIES
};
