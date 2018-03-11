const updateMentor = require('../database/queries/updateMentor');
const selectSingleMentor = require('../database/queries/selectSingleMentor');

module.exports = (req, res, next) => {
  const { mentorID } = req.params;
  const { _permission_approval_status } = req.body;
  selectSingleMentor(mentorID, (err, data) => {
    if (err) return next(err);
    const mentorData = data.rows[0];
    const info = mentorData.info;
    const newInfo = Object.assign({}, info,
      { permission_approval_status: _permission_approval_status
      });
    mentorData.info = newInfo;
    updateMentor(mentorData, error => {
      if (error) return next(error);
      return res.send({ status: true , msg: 'Permission Approval Sent Successfully' });
    });
  });
};
