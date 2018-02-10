const updateMentor = require('../database/queries/updateMentor');
const insertSingleMentor = require('../database/queries/insertSingleMentor');

module.exports = (req, res, next) => {
  const { mentorData } = req.body;
  console.log(mentorData);
  if (mentorData) {
    if (mentorData.existing) {
      updateMentor(mentorData, (dbErr, dbRes) => {
        if (dbErr) throw new Error('Error updating mentor: ', dbErr);
        res.send(dbRes);
      });
    } else {
      insertSingleMentor(mentorData, (dbErr, dbRes) => {
        if (dbErr) throw new Error(dbErr);
        res.send(dbRes);
      });
    }
  } else res.send('Mentor\'s data missing from request');
};
