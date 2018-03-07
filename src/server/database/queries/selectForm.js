const dbConnection = require('../dbConnection');

const selectForm = (formID, cb) => {
  const query = {
    text: 'SELECT * FROM forms WHERE id=$1',
    values: [formID]
  };
  dbConnection.query(query, cb);
};

module.exports = selectForm;
