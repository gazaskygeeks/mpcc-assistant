const dbConnection = require('../dbConnection');

const insertSingleMentor = (userObject, cb) => {
  const {
    first_name,
    last_name,
    date_of_arrival,
    date_of_departure,
    email
  } = userObject;
  const defaultIinfo = { mothers_name: 'NOT AVAILABLE',bio: 'NOT AVAILABLE', fi_date_of_arrival: 'DD/MM/YYYY', fi_time_of_arrival: 'MM:HH', fi_flight_number: '0000000',purpose_of_visit: 'NOT AVAILABLE', photo: '/assets/images/avatar/large/elliot.jpg', permission_email_status: false, permit_request_status: false, checklist_form_status: false, signed_waiver_status: false, fligh_information_status: false, mentor_schedule_status: false, permit_approval_status: false, book_hotel_status: false, schedule_inform_status: false, schedule_approval_status: false, schedule_to_google_status: false, whatsapp_group_status: false, share_final_files_status: false };
  const query = {
    text: 'INSERT INTO mentors (first_name, last_name, email, date_of_arrival, date_of_departure, current_stage, info) VALUES ($1, $2, $3, $4, $5, \'Stage1\', $6) RETURNING *',
    values: [first_name, last_name, email.toLowerCase(), date_of_arrival, date_of_departure, defaultIinfo]
  };
  dbConnection.query(query, cb);
};

module.exports = insertSingleMentor;
