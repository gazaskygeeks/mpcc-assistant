const test = require('tape');
const insertSingleMentor = require('../../database/queries/insertSingleMentor');
// INSERT INTO mentors (first_name, last_name, email, date_of_arrival, date_of_departure, current_stage, info) VALUES ('name', 'surname', 'email@host.ext', 'DD/MM/YYYY', 'DD/MM/YYYY', 'Stage1', '{"bio":"paragraph", "purpose_of_visit": "paragraph", "mothers_name": "anything", "permission_email_status": false, "permit_request_status": false, "checklist_form_status": false, "signed_waiver_status": false, "fligh_information_status": false, "mentor_schedule_status": false, "permit_approval_status": false, "permit_number": "numbersAndLetters", "book_hotel_status": false, "schedule_inform_status": false, "schedule_approval_status": false, "schedule_to_google_status": false, "whatsapp_group_status": false, "share_final_files_status": false, "thanks_email": false, "fi_date_of_arrival": "DD/MM/YYY", "fi_time_of_arrival": "DD/MM/YYY", "fi_flight_number": "asdasd22"}');
const userObject = {
  date_of_arrival: '17/02/2018',
  first_name: 'Someone',
  last_name: 'Smart',
  email: 'Smart@smartest.sm'
};

const insertSingleMentorTest = () => {
  test('test insertSingleMentor query', t => {
    insertSingleMentor(userObject, (err, res) => {
      if (err) {
        t.fail();
        t.end();
      }
      t.equal(res.rowCount, 1, 'rowCount should equal 1');
      t.deepEqual(res.command, 'INSERT', 'the command should equal INSERT');
      t.end();
    });
  });
};

module.exports = {
  insertSingleMentorTest
};
