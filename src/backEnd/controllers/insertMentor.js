const dbConnection = require('../dbConnection');

const insertMentor = (userObject, cb) => {
  const query = {
    text: 'INSERT INTO mentors \
    (first_name, last_name, email, date_of_arrival, current_stage, info) \
    VALUES ($1, $2, $3, TO_DATE($4, \'DD/MM/YYYY\'), $5, $6)',
    values: [userObject.dateOfArrival]
  };
  dbConnection.query(query, cb);
};

module.exports = insertMentor;
