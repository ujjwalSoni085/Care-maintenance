const twilio = require('twilio');
const logger = require('./logger'); // Assuming a logger exists, or we can use console.error

class SMSUtils {
    constructor() {
        this.accountSid = process.env.TWILIO_ACCOUNT_SID;
        this.authToken = process.env.TWILIO_AUTH_TOKEN;
        this.fromPhone = process.env.TWILIO_PHONE_NUMBER;

        if (this.accountSid && this.authToken) {
            this.client = twilio(this.accountSid, this.authToken);
        } else {
            console.warn('Twilio credentials not found in environment variables. SMS will not be sent.');
        }
    }

    /**
     * Send an SMS using Twilio
     * @param {string} to - The recipient's phone number (must include country code)
     * @param {string} body - The message body
     */
    async sendSMS(to, body) {
        if (!this.client) {
            console.error('Cannot send SMS: Twilio client is not initialized.');
            return false;
        }

        if (!to) {
             console.error('Cannot send SMS: Recipient phone number is missing.');
             return false;
        }

        try {
            const message = await this.client.messages.create({
                body: body,
                from: this.fromPhone,
                to: to
            });
            console.log(`SMS successfully sent to ${to}. Message SID: ${message.sid}`);
            return true;
        } catch (error) {
            console.error(`Failed to send SMS to ${to}:`, error.message);
            return false;
        }
    }
}

module.exports = new SMSUtils();
