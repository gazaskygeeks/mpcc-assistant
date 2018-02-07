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
          console.log(err);
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

const postSignup500 = () => {
  test('test post /signup', t => {
    supertest(app)
      .post('/signup')
      .send({
        username: 'salam',
        password: 'Salam123',
        email: 'salam@gmail.com'
      })
      .set('Accept', 'application/json, text/plain, */*')
      .set('Content-Type', 'application/json')
      .expect(500)
      .end((err, res) => {
        if (err) {
          console.log(err);
          t.end();
        }
        t.equal(res.statusCode, 500, 'should return with statusCode 500');
        t.equal(res.res.statusMessage, 'Internal Server Error', 'should return statusMessage Internal Server Error');
        t.equal(res.type, '', 'should return res.type \'\'');
        t.end();
      });
  });
};
