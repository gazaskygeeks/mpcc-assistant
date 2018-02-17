const dbConnection = require('../dbConnection');

const insertSingleMentor = (userObject, cb) => {
  const {
    date_of_arrival,
    first_name,
    last_name,
    email
  } = userObject;
  const query = {
    text: 'INSERT INTO mentors \
    (first_name, last_name, email, date_of_arrival, current_stage, info) \
    VALUES ($1, $2, $3, $4, \'Stage1\', \'{"photo": "/assets/images/avatar/large/elliot.jpg"}\')',
    values: [first_name, last_name, email.toLowerCase(), date_of_arrival]
  };
  dbConnection.query(query, cb);
};

module.exports = insertSingleMentor;
