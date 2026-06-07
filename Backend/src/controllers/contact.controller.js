const sendEmail = require('../utils/sendEmail');

const submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, and message'
      });
    }

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
    res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.'
    });
  }
};

module.exports = {
  submitContactForm
};
