const test = require('tape');
const selectMentors = require('../../database/queries/selectMentors');

const selectMentorsTest = () => {
  test('test selectMentors query', (t) => {
    selectMentors((err, res) => {
      if (err) {
        t.fail();
        t.end();
      }
      t.equal(res.rowCount, 1, 'rowCount should equal 1');
      t.deepEqual(res.rows[0].id, 1, 'id should equal 1');
      t.end();
    });
  });
};

module.exports = {
  selectMentorsTest
};
