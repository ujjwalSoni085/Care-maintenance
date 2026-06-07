const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_PORT == 465, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Define email options
  const mailOptions = {
    from: `"${options.name}" <${process.env.EMAIL_USER}>`,
    replyTo: options.email,
    to: process.env.EMAIL_TO || process.env.EMAIL_USER, // Organization's receiving email
    subject: `Contact Form Submission from ${options.name}: ${options.subject}`,
    text: options.message,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${options.name}</p>
      <p><strong>Email:</strong> ${options.email}</p>
      <p><strong>Subject:</strong> ${options.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${options.message}</p>
    `,
  };

  // Send email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
