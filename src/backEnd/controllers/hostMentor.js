const updateMentor = require('../database/queries/updateMentor');
const insertMentor = require('.database/queries/insertMentor');

module.exports = (req, res, next) => {
  if (req.mentorData.existing) {
    updateMentor(req.mentorData, (dbErr, dbRes) => {
      if (dbErr) throw new Error('Error updating mentor');
      res.send(dbRes);
    });
  } else {
    insertMentor(req.mentorData, (dbErr, dbRes) => {
      if (dbErr) throw new Error('Error updating mentor');
      res.send(dbRes);
    })
  }
};
