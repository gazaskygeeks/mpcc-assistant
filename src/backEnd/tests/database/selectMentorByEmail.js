const test = require('tape');
const selectMentorByEmail = require('../../database/queries/selectMentorByEmail');

const selectMentorByEmailTest = () => {
  test('test selectMentorByEmail query', t => {
    const email = 'email@host.ext';

    selectMentorByEmail(email, (err, res) => {
      if (err) {
        t.fail();

        return t.end();
      }
      t.equal(res.rows[0].id, 1, 'id should equal 1');
      t.equal(res.rowCount, 1, 'rowCount should equal 1');
      t.equal(res.rows[0].email, 'email@host.ext', 'should equal email@host.ext');
      return t.end();
    });
  });
};

module.exports = { selectMentorByEmailTest };
