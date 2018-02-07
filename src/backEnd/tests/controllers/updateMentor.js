const supertest = require('supertest');
const app = require('../../app');
const test = require('tape');

const updateMentorTest = () => {
  test('test get /dashboard/mentor-panel/:mentorSelector/edit/:fieldType', t => {
    supertest(app)
      .get('/dashboard/mentor-panel/Smart-Smarter-1/edit/bio')
      .expect(200)
      .end((err, res) => {
        if (err) {
          t.fail();
          t.end();
        }
        t.equal(res.statusCode, 200, 'statusCode should equal 200');
        t.equal(res.type, 'application/json', 'should return res.type application/json');
        t.equal(res.body.msg, 'MENTOR_UPDATED', 'should return MENTOR_UPDATED');
        t.end();
      });
  });
};
module.exports = {
  updateMentorTest
};
