const dbConnection = require('../dbConnection');

const updateMentorField = (notificationID, cb) => {
  let query = {};
  if (notificationID === '0') {
    query = {
      text: `UPDATE notifications SET
      seen=$1 WHERE seen=false RETURNING *`,
      values: [true]
    };
  } else {
    query = {
      text: `UPDATE notifications SET
      seen=$1 WHERE id=$2 RETURNING *`,
      values: [true, notificationID]
    };
  }
  dbConnection.query(query, cb);
};

module.exports = updateMentorField;
