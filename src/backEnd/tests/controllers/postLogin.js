const supertest = require('supertest');
const app = require('../../app');
const test = require('tape');

const postLogin = () => {
  test('test post /login', t => {
    supertest(app)
      .post('/login')
      .send({
        username: 'Someone',
        password: '123456'
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
        t.equal(res.body.msg, 'LOGGED_IN_SUCCESSFULLY', 'should return LOGGED_IN_SUCCESSFULLY');

        return t.end();
      });
  });
  test('test post /login for not signed users', t => {
    supertest(app)
      .post('/login')
      .send({
        username: 'notUSer',
        password: '123456'
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
        t.equal(res.body.msg, 'USER_NOT_FOUND', 'should return USER_NOT_FOUND');

        return t.end();
      });
  });
  test('test post /login for incorrect password', t => {
    supertest(app)
      .post('/login')
      .send({
        username: 'Someone',
        password: 'incorrectpassword'
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
        t.equal(res.body.msg, 'PASSWORD_INCORRECT', 'should return PASSWORD_INCORRECT');

        return t.end();
      });
  });
};
module.exports = {
  postLogin
};