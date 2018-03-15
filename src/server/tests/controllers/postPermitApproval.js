const supertest = require('supertest');
const app = require('../../app');
const test = require('tape');

const postPermitApproval = () => {
  test('test post /dashboard/mc/permit-approval/1', t => {
    supertest(app)
      .post('/dashboard/mc/permit-approval/1')
      .send({
        _permit_approval_status: true,
        _permit_number: '123456'
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

        return t.end();
      });
  });
};

module.exports = postPermitApproval;
