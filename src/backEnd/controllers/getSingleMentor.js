const selectSingleMentor = require('../database/queries/selectSingleMentor');

module.exports = (req, res, next) => {
  const mentorId = req.params.mentorSelector.split('-')[2];
  selectSingleMentor(mentorId, (err, data) => {
    if (err) return next(err);

    return res.status(200).send({
      data: data.rows
    });
  });
};
