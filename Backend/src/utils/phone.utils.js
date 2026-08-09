/**
 * Normalizes a phone number to standard format +91XXXXXXXXXX
 * @param {string} phone 
 * @returns {string} Normalized phone number
 */
function normalizePhone(phone) {
    if (!phone) return phone;
    
    // Strip spaces, hyphens, and parentheses
    let cleaned = phone.replace(/[\s\-()]/g, '');
    
    // If it's a 10-digit number, prepend +91
    if (cleaned.length === 10 && /^\d+$/.test(cleaned)) {
        cleaned = '+91' + cleaned;
    }
    // If it's 11 digits and starts with 0, replace 0 with +91
    else if (cleaned.length === 11 && cleaned.startsWith('0')) {
        cleaned = '+91' + cleaned.substring(1);
    }
    // If it's 12 digits and starts with 91 but no +, prepend +
    else if (cleaned.length === 12 && cleaned.startsWith('91')) {
        cleaned = '+' + cleaned;
    }
    
    return cleaned;
}

module.exports = {
    normalizePhone
};
