const test = require('tape');
const selectMentors = require('../../database/queries/selectMentors');

const selectMentorsTest = () => {
  test('test selectMentors query', t => {
    selectMentors((err, res) => {
      if (err) {
        t.fail();

        return t.end();
      }
      t.equal(res.rowCount, 3, 'rowCount should equal 3');
      t.deepEqual(res.rows[0].id, 2, 'id should equal 1');
      return t.end();
    });
  });
};

module.exports = selectMentorsTest;
