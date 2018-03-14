const updateMentor = require('../database/queries/updateMentor');
const selectSingleMentor = require('../database/queries/selectSingleMentor');

module.exports = (req, res, next) => {
  const { mentorID } = req.params;
  const { _permit_approval_status, _permit_number } = req.body;
  selectSingleMentor(mentorID, (err, data) => {
    if (err) return next(err);
    const mentorData = data.rows[0];
    const info = mentorData.info;
    const newInfo = Object.assign({}, info,
      { permit_approval_status: _permit_approval_status,
        permit_number: _permit_number
      });
    mentorData.info = newInfo;
    updateMentor(mentorData, error => {
      if (error) return next(error);
      return res.send({ status: true , msg: 'Permit Details Sent Successfully' });
    });
  });
};
