const mailer = require('nodemailer');
const config = require('../config');

var transporter = mailer.createTransport({
  service: "smtp.office365.com",
  secureConnection: false,
  port: 587,
  auth: {
      user: `${config.email}`,
      pass: `${config.pass}`
  }
});

module.exports = transporter;