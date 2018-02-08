const loginQuery = require('../database/queries/selectUser');
const bcrypt = require('../helpers/bcrypt');

module.exports = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  loginQuery(username, (err, data) => {
    if (err) return next(err);
    else if (data.rowCount === 0) {
      return res.send({ msg: 'USER_NOT_FOUND' });
    }
    bcrypt.comparePasswords(password, data.rows[0].password, (errorComparing, result) => {
      if (errorComparing) return next(errorComparing);

      return res.send({ msg: 'LOGGED_IN_SUCCESSFULLY' });
    });
  });
};
