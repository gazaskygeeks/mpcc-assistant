const updateMentor = require('../database/queries/updateMentor');
const selectSingleMentor = require('../database/queries/selectSingleMentor');
const insertNotification = require('../database/queries/insertNotification');

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
      const notificationObj = {
        ref: 'permit',
        mentor_id: mentorData.id
      };
      insertNotification(notificationObj, notifyErr => {
        if (!!notifyErr) {
          return next(notifyErr);
        }
        return res.send({ status: true , msg: 'Permit Details Sent Successfully', notifyStatus: true });
      });
    });
  });
};
