const supertest = require('supertest');
const app = require('../../app');
const test = require('tape');

const updateMentorTest = () => {
  test('test get /dashboard/mentor-panel/Smart-Smarter-1/edit/bio', t => {
    supertest(app)
      .post('/dashboard/mentor-panel/Smart-Smarter-1/edit/bio')
      .send({
        bio: 'new bio'
      })
      .set('Accept', 'application/json, text/plain, */*')
      .set('Content-Type', 'application/json')
      .expect(200)
      .end((err, res) => {
        if (err) {
          t.fail();

          return t.end();
        }
        t.equal(res.statusCode, 200, 'statusCode should equal 200');
        t.equal(res.type, 'application/json', 'should return res.type application/json');
        t.equal(res.body.msg, 'MENTOR_UPDATED', 'should return MENTOR_UPDATED');

        return t.end();
      });
  });
};
module.exports = {
  updateMentorTest
};
