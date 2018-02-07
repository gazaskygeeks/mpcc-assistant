const dbConnection = require('../dbConnection');

const selectSingleMentor = (id, cb) => {
  const query = {
    text: 'select * from mentors where id=$1',
    values: [id]
  };
  dbConnection.query(query, cb);
};

module.exports = selectSingleMentor;
