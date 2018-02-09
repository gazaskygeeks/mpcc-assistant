const updateMentor = require('../database/queries/updateMentor');
const selectSingleMentor = require('../database/queries/selectSingleMentor');

module.exports = (req, res, next) => {
  const { mentorSelector } = req.params;
  const mentorId = mentorSelector.split('-')[2];
  selectSingleMentor(mentorId, (err, data) => {
    const { docType } = req.params;
    if (err) return next(err);
    const mentorData = data.rows[0];
    const info = mentorData.info;
    info.docType = !info.docType;
    mentorData.info = JSON.stringify(info);
    updateMentor(mentorData, error => {
      if (error) return next(error);

      return res.send({ update: true });
    });
  });
};
