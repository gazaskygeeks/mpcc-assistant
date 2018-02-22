const supertest = require('supertest');
const app = require('../../app');
const test = require('tape');

const postDocStatusTest = () => {
  test('test get /dashboard/mentor-panel/1/check/signed_waiver', t => {
    supertest(app)
      .post('/dashboard/mentor-panel/1/check/signed_waiver')
      .expect(200)
      .end((err, res) => {
        if (err) {
          t.fail();
          t.end();
        }
        t.equal(res.statusCode, 200, 'statusCode should equal 200');
        t.equal(res.type, 'application/json', 'should return res.type application/json');
        t.equal(res.body.update, true, 'should return true');

        t.end();
      });
  });
};
module.exports = postDocStatusTest;
