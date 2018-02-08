const dbConnection = require('../dbConnection');

const insertSingleMentor = (userObject, cb) => {
  const {
    dateOfArrival,
    firstName,
    lastName,
    email
  } = userObject;
  const query = {
    text: 'INSERT INTO mentors (first_name, last_name, email, date_of_arrival, current_stage) \
    VALUES ($1, $2, $3, TO_DATE($4, \'DD/MM/YYYY\'), \'firstStage\')',
    values: [firstName, lastName, email, dateOfArrival]
  };
  dbConnection.query(query, cb);
};

module.exports = insertSingleMentor;
