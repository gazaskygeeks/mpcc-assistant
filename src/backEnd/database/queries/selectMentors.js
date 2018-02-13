const dbConnection = require('../dbConnection');

const selectMentors = cb => {
  const query = {
    text: 'SELECT * FROM mentors'
  };
  dbConnection.query(query, cb);
};

module.exports = selectMentors;
