const supertest = require('supertest');
const app = require('../../app');
const test = require('tape');
const path = require('path');
const fs = require('fs');

console.log(path.join(__dirname, 'testfile.pdf'));
const somepdf = fs.readFileSync(path.join(__dirname, 'testfile.pdf'));
const postWaiverTest = () => {
  test('test /submit/signed-waiver/confirm', t => {
    supertest(app)
      .post('/submit/signed-waiver/confirm')
      .set('Content-Type', 'multipart/form-data;boundary=----WebKitFormBoundaryyrV7KO0BoCBuDbTL')
      .send(somepdf)
      .expect(200)
      .end((err, res) => {
        if (err) {
          t.fail();
          return t.end();
        }
        t.equal();
        return t.end();
      });
  });
};

module.exports = postWaiverTest;
