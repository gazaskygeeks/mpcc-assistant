const dbConnection = require('../dbConnection');

const insertSingleMentor = (userObject, cb) => {
  const {
    dateOfArrival,
    firstName,
    lastName,
    email
  } = userObject;
  const query = {
    text: 'INSERT INTO mentors \
    (first_name, last_name, email, date_of_arrival, current_stage, info) \
    VALUES ($1, $2, $3, $4, \'Stage1\', \'{"photo": "/assets/images/avatar/large/elliot.jpg"}\')',
    values: [firstName, lastName, email, dateOfArrival]
  };
  dbConnection.query(query, cb);
};

module.exports = insertSingleMentor;
