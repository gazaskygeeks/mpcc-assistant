const emails = require('../database/emails.json');

module.exports = (req, res) => {
  const emailName = req.params.someEmail;
  res.status(200).send({ data: emails[emailName] });
};
