const updateMentor = require('../database/queries/updateMentor');
const selectSingleMentor = require('../database/queries/selectSingleMentor');

module.exports = (req, res, next) => {
  const mentorId = req.params.mentorSelector;
  selectSingleMentor(mentorId, (err, data) => {
    if (err) return next(err);
    const { fieldType } = req.params;
    const mentorData = data.rows[0];
    const info = mentorData.info;
    info.fieldType = req.body.fieldType;
    mentorData.info = JSON.stringify(info);
    updateMentor(mentorData, error => {
      if (error) return next(error);

      return res.send({ msg: 'MENTOR_UPDATED' });
    });
  });
};
