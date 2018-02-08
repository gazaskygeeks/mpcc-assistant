const bcryptjs = require('bcryptjs');

const comparePasswords = (password, hashPassword, cb) => {
  bcryptjs.compare(password, hashPassword, (errorComparing, result) => {
    if (errorComparing) {
      return cb(errorComparing);
    }

    return cb(null, result);
  });
};

module.exports = { comparePasswords };
