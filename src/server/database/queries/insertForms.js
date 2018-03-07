const dbConnection = require('../dbConnection');
const permitBiodata = require('../prmitBiodata.json');

const insertForms = cb => {
  const query = {
    text: 'INSERT INTO forms (form_name, vars) VALUES (\'permitBiodata\', $1);',
    values: [permitBiodata]
  };
  dbConnection.query(query, cb);
};

module.exports = insertForms;
