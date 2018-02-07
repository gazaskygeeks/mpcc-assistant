const dbConnection = require('../dbConnection');

const updateMentorField = (mentorObj, cb) => {
  const { first_name, last_name, email, date_of_arrival, date_of_birth, current_stage, info, id } = mentorObj;
  const query = {
    text: 'update mentors set first_name=$1 AND last_name=$2 and email=$3 AND date_of_arrival=$4 AND date_of_birth=$5 AND current_stage=$6 and info=$7 where id=$8 returning *',
    values: [first_name, last_name, email, date_of_arrival, date_of_birth, current_stage, info, id]
  };
  dbConnection.query(query, cb);
};

module.exports = updateMentorField;
