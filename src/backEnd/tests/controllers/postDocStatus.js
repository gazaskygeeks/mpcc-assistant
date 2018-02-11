const supertest = require('supertest');
const app = require('../../app');
const test = require('tape');

const postDocStatusTest = () => {
  test('test get /dashboard/mentor-panel/Smart-Smarter-1/check/singned_waver', t => {
    supertest(app)
      .get('/dashboard/mentor-panel/Smart-Smarter-1/check/singned_waver')
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
module.exports = {
  postDocStatusTest
};
