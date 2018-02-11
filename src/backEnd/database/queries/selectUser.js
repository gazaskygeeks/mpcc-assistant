const dbConnection = require('../dbConnection');

const selectMentorByUsername = (username, cb) => {
  const query = {
    text: 'select * from users where username = $1',
    values: [username]
  };
  dbConnection.query(query, cb);
};

module.exports = selectMentorByUsername;
