const selectSingleMentor = require('../database/queries/selectSingleMentor');

module.exports = (req, res, next) => {
  const { mentorSelector } = req.params;
  selectSingleMentor(mentorSelector, (err, data) => {
    if (err) return next(err);
    else if (data.rowCount === 0) {
      return res.send({ exists: false, msg: 'Mentor Was Not Found!' });
    }

    return res.status(200).send({
      mentorData: data.rows
    });
  });
};
