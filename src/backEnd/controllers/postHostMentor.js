const updateMentor = require('../database/queries/updateMentor');
const insertSingleMentor = require('../database/queries/insertSingleMentor');

module.exports = (req, res, next) => {
  const { mentorData } = req.body;
  if (mentorData) {
    if (mentorData.existing) {
      updateMentor(mentorData, (dbErr, dbRes) => {
        if (dbErr) return next(new Error(`Error updating mentor: ${dbErr.message}`));
        res.send(dbRes);
      });
    } else {
      insertSingleMentor(mentorData, (dbErr, dbRes) => {
        if (dbErr) return next(new Error(`Error inserting mentor: ${dbErr.message}`));
        res.send(dbRes);
      });
    }
  } else res.send('Mentor\'s data missing from request');
};
