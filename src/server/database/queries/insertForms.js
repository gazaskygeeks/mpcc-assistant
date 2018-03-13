const dbConnection = require('../dbConnection');
const forms = require('../forms.json');

const insertForms = cb => {
  const query = {
    text: 'INSERT INTO forms (form_name, vars) VALUES ($1, $2), ($3, $4);',
    values: [forms['1'].name, forms['1'], forms['2'].name, forms['2']]
  };
  dbConnection.query(query, cb);
};

module.exports = insertForms;
