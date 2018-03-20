const updateNotification = require('../database/queries/updateNotification');
const selectNotifications = require('../database/queries/selectNotifications');

module.exports = (req, res, next) => {
  const { id } = req.params;
  updateNotification(id, err => {
    if (err) return next(err);
    selectNotifications((error, data) => {
      if (error) return next(err);

      return res.send({
        notifications: data.rows,
        status: true
      });
    });
  });
};
