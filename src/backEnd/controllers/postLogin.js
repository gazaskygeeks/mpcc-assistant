const loginQuery = require('../database/queries/selectUser');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const { username, password } = req.body;
  loginQuery(username, (err, data) => {
    if (err) return next(err);
    else if (data.rowCount === 0) {
      return res.send({ msg: 'USERNAME/PASSWORD is Incorrect', loggedin: false });
    }
    bcryptjs.compare(password, data.rows[0].password, (errorComparing, result) => {
      if (errorComparing) return next(errorComparing);
      else if (!result)
        return res.send({ msg: 'USERNAME/PASSWORD is Incorrect', loggedin: false });
      const payload = {
        id: data.rows[0].id,
        username: data.rows[0].username,
        role: data.rows[0].role
      };
      jwt.sign(payload, process.env.SECRET, (errCreatingToken, token) => {
        if (errCreatingToken) return next(errCreatingToken);
        res.setHeader('Set-Cookie',
          ['logged_in=true; Max-Age=24*60*60', `token=${token}; Max-Age=24*60*60`]);

        return res.send({ msg: 'LOGGED_IN_SUCCESSFULLY', loggedin: true });
      });
    });
  });
};
