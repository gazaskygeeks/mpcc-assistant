const dbConnection = require('../dbConnection');

const selectMentors = cb => {
  const query = {
    text: 'select * from mentors'
  };
  dbConnection.query(query, cb);
};

module.exports = selectMentors;
