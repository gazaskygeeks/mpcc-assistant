const dbConnection = require('../dbConnection');

const selectSingleMentor = (field, cb) => {
  console.log('field', typeof field);
  const query = {
    text: `select * from mentors where ${Number.isInteger(field) ? 'id=$1' : 'email=$2'}`,
    // Assuming IDs can't grow more than 5 characters
    values: [field, field]
  };
  dbConnection.query(query, cb);
};

module.exports = selectSingleMentor;
