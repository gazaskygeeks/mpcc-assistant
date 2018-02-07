const emails = require('../database/emails.json');

module.exports = (req, res) => {
  const emailName = req.params.emailType;
  res.status(200).send({ data: emails[emailName] });
};
