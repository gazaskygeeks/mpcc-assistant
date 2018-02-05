const dbConnection = require('../dbConnection');

const selectMentors = (cb) => {
  const query = {
    text: 'select * from mentors'
  };
  dbConnection.query(query, (err, res) => {
    if (err) return cb(err);
    return cb(null, res);
  });
};

module.exports = selectMentors;
