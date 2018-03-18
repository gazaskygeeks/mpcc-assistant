const dbConnection = require('../dbConnection');

const insertNotification = (notificationObj, cb) => {
  const { ref, mentor_id, form_id } = notificationObj;
  const query = {
    text: 'INSERT INTO notifications (ref, mentor_id, form_id, seen) VALUES ($1, $2, $3, $4) RETURNING *',
    values: [ref, mentor_id, form_id || null, false]
  };
  dbConnection.query(query, cb);
};

module.exports = insertNotification;
