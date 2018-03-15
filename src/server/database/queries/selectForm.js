const dbConnection = require('../dbConnection');

const selectForms = (formID, cb) => {
  const query = {
    text: 'SELECT * FROM forms WHERE id=$1',
    values: [formID]
  };
  dbConnection.query(query, cb);
};

module.exports = selectForms;
