const loginQuery = require('../database/queries/selectUser');
const bcrypt = require('../helpers/bcrypt');
const jwt = require('../helpers/jwt');

module.exports = (req, res, next) => {
  const { username, password } = req.body;
  loginQuery(username, (err, data) => {
    if (err) return next(err);
    else if (data.rowCount === 0) {
      return res.send({ msg: 'USER_NOT_FOUND', loggedin: false });
    }
    bcrypt.comparePasswords(password, data.rows[0].password, (errorComparing, result) => {
      if (errorComparing) return next(errorComparing);
      const payload = {
        id: data.rows[0].id,
        username: data.rows[0].username,
        role: data.rows[0].role
      };
      jwt.createToken(payload, (errCreatingToken, token) => {
        if (errCreatingToken) return next(errCreatingToken);
        res.setHeader('Set-Cookie', ['logged_in=true; Max-Age=24*60*60', `token=${token}; Max-Age=24*60*60`]);

        return res.send({ msg: 'LOGGED_IN_SUCCESSFULLY', loggedin: true });
      });
    });
  });
};
