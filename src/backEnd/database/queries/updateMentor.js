const dbConnection = require('../dbConnection');

const updateMentorField = (mentorObj, cb) => {
  const { first_name, last_name, email, date_of_arrival,
    date_of_birth, current_stage, info, id } = mentorObj;
  const query = {
    text: `update mentors set
    first_name=$1, last_name=$2,
    email=LOWER($3),
    date_of_arrival=$4,
    date_of_birth=$5,
    current_stage=$6,
    info=$7
    where id=$8 returning *`,
    values: [first_name, last_name, email, date_of_arrival, date_of_birth, current_stage, info, id]
  };
  dbConnection.query(query, cb);
};

module.exports = updateMentorField;
