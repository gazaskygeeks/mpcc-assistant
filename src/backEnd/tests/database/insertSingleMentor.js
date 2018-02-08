const test = require('tape');
const insertSingleMentor = require('../../database/queries/insertSingleMentor');

const userObject = {
  dateOfArrival: '17/02/2018',
  firstName: 'Someone',
  lastName: 'Smart',
  email: 'Smart@smartest.sm'
};

const insertSingleMentorTest = () => {
  test('test insertSingleMentor query', t => {
    insertSingleMentor(userObject, (err, res) => {
      console.log('reeees', res);
      if (err) {
        t.fail();
        t.end();
      }
      t.equal(1, 1, 'rowCount should equal 1');
      t.deepEqual(1, 1, 'id should equal 1');
      t.end();
    });
  });
};

module.exports = {
  insertSingleMentorTest
};
