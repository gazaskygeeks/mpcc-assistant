const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
require('env2')('./config.env');

module.exports = (req, res) => {
  const emailInfo = req.body;
  const message = {
    from: `"Sarah Al-Afifi" ${process.env.MAIL_EMAIL}`,
    to: emailInfo.to,
    cc: emailInfo.cc,
    bcc: emailInfo.bcc,
    subject: emailInfo.subject,
    text: emailInfo.content
  };
  const transporter = nodemailer.createTransport(smtpTransport({
    host: 'hostSTMP',
    secure: false,
    requireTLS: true,
    tls: {
      rejectUnauthorized: false
    },
    service: 'gmail',
    port: 587,
    auth: {
      user: process.env.MAIL_EMAIL,
      pass: process.env.MAIL_PASS
    }
  }));
  transporter.sendMail(message, error => {
    console.log(error);
    if (error) {
      res.status(500).json({ message: 'ErrorSendingEmail' });
    } else {
      transporter.close();
      res.json({ message: 'EmailSentSuccessfully' });
    }
  });
};
