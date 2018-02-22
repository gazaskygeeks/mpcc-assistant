const updateMentor = require('../database/queries/updateMentor');
const selectSingleMentor = require('../database/queries/selectSingleMentor');

module.exports = (req, res, next) => {
  const mentorId = req.params.mentorSelector;
  selectSingleMentor(mentorId, (err, data) => {
    const { docType } = req.params;
    if (err) return next(err);
    const mentorData = data.rows[0];
    const info = mentorData.info;
    info[docType] = !info[docType];
    mentorData.info = JSON.stringify(info);
    updateMentor(mentorData, (error, result) => {
      if (error) return next(error);

      return res.send({ update: true, currentMentor: result.rows[0] });
    });
  });
};
