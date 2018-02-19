const supertest = require('supertest');
const app = require('../../app');
const test = require('tape');

const getMentorsTest = () => {
  test('test get /get-mentors', t => {
    supertest(app)
      .get('/get-mentors')
      .expect(200)
      .end((err, res) => {
        if (err) {
          t.fail();

          return t.end();
        }
        t.equal(res.statusCode, 200, 'should return with statusCode 200');
        t.equal(res.type, 'application/json', 'should return res.type application/json');

        return t.end();
      });
  });
};
module.exports = getMentorsTest;
