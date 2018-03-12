const dbConnection = require('../dbConnection');

const selectNotifications = cb => {
  const query = {
    text: 'SELECT * FROM notifications WHERE seen=false'
  };
  dbConnection.query(query, cb);
};

module.exports = selectNotifications;
