const supertest = require('supertest');
const app = require('../../app');
const test = require('tape');

const postFlightInfo = () => {
  test('test post /submit/flight-info/confirm', t => {
    supertest(app)
      .post('/submit/flight-info/confirm')
      .send({
        mentor_email: 'Smart@smart',
        date_of_arrival: '12/12/1212',
        time_of_arrival: '01:22',
        flight_number: '112233'
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
  test('test post /submit/flight-info/confirm for Not Existing Mentor', t => {
    supertest(app)
      .post('/submit/flight-info/confirm')
      .send({
        mentor_email: 'Notmentor@smart',
        date_of_arrival: '12/12/1212',
        time_of_arrival: '01:22',
        flight_number: '112233'
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
        t.equal(res.body.msg, 'Mentor Does Not Exists', 'should return Mentor Does Not Exists');

        return t.end();
      });
  });
};

module.exports = postFlightInfo;
