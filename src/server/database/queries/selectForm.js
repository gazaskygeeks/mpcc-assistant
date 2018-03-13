const dbConnection = require('../dbConnection');

const selectForms = (formID, cb) => {
  console.log('<------------------------BreakpointAS----------------------->');
  console.log('formID', formID);
  console.log('parseInt(formID)', parseInt(formID));
  console.log('typeof formID', typeof formID);
  console.log('<------------------------BreakpointAE----------------------->');
  const query = {
    text: 'SELECT * FROM forms WHERE id=$1',
    values: [formID]
  };
  dbConnection.query(query, cb);
};

module.exports = selectForms;
