const updateSingleMentor = require('../database/queries/updateSingleMentor');
const insertSingleMentor = require('../database/queries/insertSingleMentor');

module.exports = (req, res, next) => {
  const { mentorData } = JSON.parse(req.body);
  if (mentorData) {
    if (mentorData.existing) {
      updateSingleMentor(mentorData, (dbErr, dbRes) => {
        if (dbErr) throw new Error('Error updating mentor');
        res.send(dbRes);
      });
    } else {
      insertSingleMentor(mentorData, (dbErr, dbRes) => {
        if (dbErr) throw new Error('Error updating mentor');
        res.send(dbRes);
      });
    }
  } else res.send('Mentor\'s data missing from request');
};
