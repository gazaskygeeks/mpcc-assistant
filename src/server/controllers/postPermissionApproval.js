const updateMentor = require('../database/queries/updateMentor');
const selectSingleMentor = require('../database/queries/selectSingleMentor');
const insertNotification = require('../database/queries/insertNotification');

module.exports = (req, res, next) => {
  const { mentorID } = req.params;
  const { _permission_approval_status } = req.body;
  selectSingleMentor(mentorID, (err, data) => {
    if (err) return next(err);
    const mentorData = data.rows[0];
    const info = mentorData.info;
    const newInfo = Object.assign({}, info,
      { permission_approval_status: !!_permission_approval_status.includes('true')
      });
    mentorData.info = newInfo;
    updateMentor(mentorData, error => {
      if (error) return next(error);
      const notificationObj = {
        ref: 'permission',
        mentor_id: mentorData.id
      };
      insertNotification(notificationObj, notifyErr => {
        if (!!notifyErr) {
          return next(notifyErr);
        }
        return res.send({ status: true, msg: 'Permission Approval Sent Successfully', notifyStatus: true });
      });
    });
  });
};
