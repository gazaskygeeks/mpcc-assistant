const test = require('tape');
const selectMentorByEmail = require('../../database/queries/selectMentorByEmail');

const selectMentorByEmailTest = () => {
  test('test selectMentorByEmail query', t => {
    const email = 'JamEel.DeNse@gMaiL.cOm';

    selectMentorByEmail(email, (err, res) => {
      if (err) {
        t.fail();
        return t.end();
      }
      t.equal(res.rowCount, 1, 'rowCount should equal 1');
      t.equal(res.rows[0].email, email.toLowerCase(), `should equal ${email.toLowerCase()}`);
      return t.end();
    });
  });
};

module.exports = selectMentorByEmailTest;
