const updateMentor = require('../database/queries/updateMentor');
const selectSingleMentor = require('../database/queries/selectSingleMentor');

module.exports = (req, res, next) => {
  const mentorId = req.params.mentorSelector.split('-')[2];
  const fieldType = req.params.fieldType;
  selectSingleMentor(mentorId, (err, data) => {
    if (err) return next(err);
    const mentorData = data.rows[0];
    const info = mentorData.info;
    if (fieldType === 'bio') {
      info.bio = req.body.bio;
    } else if (fieldType === 'purpose_of_visit') {
      info.pov = req.body.purpose_of_visit;
    }
    mentorData.info = JSON.stringify(info);
    updateMentor(mentorData, error => {
      if (error) return next(error);

      return res.send({ msg: 'MENTOR_UPDATED' });
    });
  });
};
