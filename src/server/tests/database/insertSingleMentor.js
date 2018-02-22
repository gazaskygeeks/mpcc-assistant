const test = require('tape');
const insertSingleMentor = require('../../database/queries/insertSingleMentor');
const userObject = {
  first_name: 'Leo',
  last_name: 'King',
  email: 'leo.king@gmail.com',
  date_of_arrival: '17/02/2018',
  date_of_departure: '31/02/2019',
  info: '{"mothers_name": "Synthia","bio":"here is the bio", "fi_date_of_arrival": "28/02/2018", "fi_time_of_arrival":"22:22", "fi_flight_number":"4554","purpose_of_visit":"Mentoring", "photo": "/assets/images/avatar/large/elliot.jpg", "permission_email_status": false, "permit_request_status": false, "checklist_form_status": false, "signed_waiver_status": false, "fligh_information_status": false, "mentor_schedule_status": false, "permit_approval_status": false, "book_hotel_status": false, "schedule_inform_status": false, "schedule_approval_status": false, "schedule_to_google_status": false, "whatsapp_group_status": false, "share_final_files_status": false}'
};

const insertSingleMentorTest = () => {
  test('test insertSingleMentor query', t => {
    insertSingleMentor(userObject, (err, res) => {
      if (err) {
        t.fail();
        return t.end();
      }
      t.equal(res.rowCount, 1, 'rowCount should equal 1');
      t.deepEqual(res.command, 'INSERT', 'the command should equal INSERT');
      t.end();
    });
  });
};

module.exports = insertSingleMentorTest;
