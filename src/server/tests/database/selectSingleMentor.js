const test = require('tape');
const selectSingleMentor = require('../../database/queries/selectSingleMentor');

const selectSingleMentorTest = () => {
  test('test selectSingleMentor query', t => {
    const id = 1;

    selectSingleMentor(id, (err, res) => {
      if (err) {
        t.fail();

        return t.end();
      }
      t.equal(res.rows[0].id, 1, 'id should equal 1');
      t.equal(res.rowCount, 1, 'rowCount should equal 1');

      return t.end();
    });
  });
};

module.exports = selectSingleMentorTest;
