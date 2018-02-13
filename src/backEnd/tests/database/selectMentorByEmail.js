const test = require('tape');
const selectMentorByEmail = require('../../database/queries/selectMentorByEmail');

const sselectMentorByEmailTest = () => {
  test('test selectMentorByEmail query', t => {
    const email = 'Smart@smart';

    selectMentorByEmail(email, (err, res) => {
      if (err) {
        t.fail();

        return t.end();
      }
      t.equal(res.rows[0].id, 1, 'id should equal 1');
      t.equal(res.rowCount, 1, 'rowCount should equal 1');
      t.equal(res.rows[0].email, 'Smart@smart', 'should equal Smart@smart');

      return t.end();
    });
  });
};

module.exports = { sselectMentorByEmailTest };
