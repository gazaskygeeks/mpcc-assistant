const selectNotifications = require('../database/queries/selectNotifications');

module.exports = (req, res, next) => {
  selectNotifications((err, data) => {
    if (err) return next(err);

    return res.status(200).send({
      notifications: data.rows
    });
  });
};
