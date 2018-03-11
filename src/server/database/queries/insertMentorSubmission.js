const dbConnection = require('../dbConnection');
const selectSingleMentor = require('./selectSingleMentor');

const insertMentorSubmission = (form, cb) => selectSingleMentor
(form.mentorEmail, (err, selectUserRes) => {
  if (err) return 'PleaseProvideAProperEmail';
  if (!selectUserRes.rowCount) {
    return 'PleaseHostANewMentor';
  }
  console.log('selectUserRes', selectUserRes);
  const query = {
    text: 'INSERT INTO mentors (form_name, vars) VALUES (\'permitBiodata\', $1);',
    values: [form]
  };
  dbConnection.query(query, cb);

});

module.exports = insertMentorSubmission;
