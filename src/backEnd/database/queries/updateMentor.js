const dbConnection = require('../dbConnection');

const updateMentor = (userObject, cb) => {
  const query = {
    text: "UPDATE mentors SET date_of_arrival=TO_DATE($1), current_stage='First Stage'",
    values: [userObject.dateOfArrival]
  };
  dbConnection.query(query, cb);
};

module.exports = updateMentor;
