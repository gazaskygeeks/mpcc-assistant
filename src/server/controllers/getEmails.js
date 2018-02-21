const emails = require('../database/emails.json');

module.exports = (req, res) => {
  res.status(200).send({ data: emails });
};
