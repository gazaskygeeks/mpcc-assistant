const supertest = require('supertest');
const app = require('../../app');
const test = require('tape');

const getEmailTest = () => {
  test('test /dashboard/mentor-panel/get-emails', t => {
    supertest(app)
      .get('/dashboard/mentor-panel/get-emails')
      .expect(200)
      .end((err, res) => {
        if (err) {
          t.fail();

          return t.end();
        }
        t.equal(res.statusCode, 200, 'statusCode should equal 200');
        t.equal(res.type, 'application/json', 'should return res.type application/json');
        return t.end();
      });
  });

};

module.exports = {
  getEmailTest
};
