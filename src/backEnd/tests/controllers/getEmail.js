const supertest = require('supertest');
const app = require('../../app');
const test = require('tape');

const getEmailTest = () => {
  test('test /dashboard/mentor-panel/:mentorSelector/send-email/:someEmail', t => {
    supertest(app)
      .get('/dashboard/mentor-panel/salam-dalloul-93/send-email/permitEmail')
      .expect(200)
      .end((err, res) => {
        if (err) {
          t.fail();
          t.end();
        }
        t.equal(res.statusCode, 200, 'statusCode should equal 200');
        t.equal(res.type, 'application/json', 'should return res.type application/json');
        t.equal(res.body.data.subject, '#mentor-name#, Time to Apply for Your Permit!', 'respose body subject should be #mentor-name#, Time to Apply for Your Permit!');
        t.end();
      });
  });

  test('test /dashboard/mentor-panel/:mentorSelector/send-email/:fakeEmail', t => {
    supertest(app)
      .get('/dashboard/mentor-panel/salam-dalloul-93/send-email/fakeEmail')
      .expect(200)
      .end((err, res) => {
        if (err) {
          t.fail();
          t.end();
        }
        t.equal(res.statusCode, 200, 'statusCode should equal 200');
        t.equal(res.type, 'application/json', 'should return res.type application/json');
        t.deepEqual(res.body, {} , 'respose should be empty');
        t.end();
      });
  });
};

module.exports = {
  getEmailTest
};
