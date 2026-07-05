const sendEmail = require('../utils/sendEmail');
const asyncHandler = require('express-async-handler');

const submitContactForm = asyncHandler(async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    res.status(400);
    throw new Error('Please provide name, email, and message');
  }

  try {
    await sendEmail({
      name,
      email,
      subject: subject || 'No Subject',
      message
    });

    res.status(200).json({
      success: true,
      message: 'Email sent successfully!'
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500);
    throw new Error('Failed to send email. Please try again later.');
  }
});

module.exports = {
  submitContactForm
};
