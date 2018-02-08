const dbConnection = require('../dbConnection');

const updateSingleMentor = (userObject, cb) => {
  const { dateOfArrival } = userObject;
  const query = {
    text: "UPDATE mentors SET date_of_arrival=TO_DATE($1), current_stage='First Stage'",
    values: [dateOfArrival]
  };
  dbConnection.query(query, cb);
};

module.exports = updateSingleMentor;
