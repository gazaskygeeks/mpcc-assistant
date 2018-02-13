const dbConnection = require('../dbConnection');

const selectMentorByEmail = (mentorEmail, cb) => {
  const query = {
    text: 'select * from mentors where email=$1',
    values: [mentorEmail]
  };
  dbConnection.query(query, cb);
};

module.exports = selectMentorByEmail;
