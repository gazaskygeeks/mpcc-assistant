const test = require('tape');
const updateMentor = require('../../database/queries/updateMentor');

const updateMentorQueryTest = () => {
  test('test updateMentorQueryTest query', t => {
    const mentorData = {
      id: 1,
      first_name: 'Jameel',
      last_name: 'Dense',
      email: 'jameel.dense@gmail.com',
      date_of_arrival: '31/03/2018',
      current_stage: 'Stage_1',
      info: '{"mothers_name": "Dalia","bio":"here is the bio", "fi_date_of_arrival": "28/02/2018", "fi_time_of_arrival":"22:22", "fi_flight_number":"4554","purpose_of_visit":"Mentoring", "photo": "assets/images/avatar/large/molly.jpg"}'
    };
    updateMentor(mentorData, (err, res) => {
      if (err) {
        t.fail();

        return t.end();
      }
      t.equal(res.rowCount, 1, 'rowCount should equal 1');
      t.deepEqual(res.rows[0].info, JSON.parse(mentorData.info),
        'new data retrived from update query should be the same as sent by client');

      return t.end();
    });
  });
};

module.exports = updateMentorQueryTest;
