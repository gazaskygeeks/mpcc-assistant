const test = require('tape');
const selectUser = require('../../database/queries/selectUser');

const selectUserTest = () => {
  test ('test selectUser query', t => {
    const username = 'Someone';
    selectUser(username, (err, res) => {
      if (err) {
        t.fail();

        return t.end();
      }
      t.equal(res.rowCount, 1, 'rowCount should equal 1');
      t.equal(res.rows[0].username, 'Someone', 'shoud reutrn the signed user');

      return t.end();
    });
  });
  test ('test selectUser query for not signed users', t => {
    const username = 'notUser';
    selectUser(username, (err, res) => {
      if (err) {
        t.fail();

        return t.end();
      }
      t.equal(res.rowCount, 0, 'rowCount should equal 0');

      return t.end();
    });
  });
};

module.exports = {
  selectUserTest
};
