const supertest = require('supertest');
const app = require('../../app');
const test = require('tape');

const getSingleMentorTest = () => {
  test('test get /dashboard/mentor-panel/:mentorSelector', t => {
    supertest(app)
      .get('/dashboard/mentor-panel/93')
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
  getSingleMentorTest
};
