const nodemailer = require('nodemailer');
const emails = require('../database/emails.json');
const smtpTransport = require('nodemailer-smtp-transport');
const selectMentors = require('../database/queries/selectMentors');
require('env2')('./config.env');

//{ mentorSelector: 'mentorSelector', emailTypel: 'emailTypel' }
module.exports = (req, res) => {
  const emailInfo = JSON.parse(req.body).emailInfo;
  const message = {
    from: `"alan claynce" ${process.env.MAIL_EMAIL}`,
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
    if (error) {
      // res.status(500).json({ message: error.message });
    } else {
      transporter.close();
      console.log('sent');
      // res.json({ message: 'Email sent successfully' });
    }
  });
};
