BEGIN;

INSERT INTO users (username, email, password, role) VALUES ('Someone', 'Someone@something', '$2a$10$xItA5xyDjBfyLzyx5cumauyAJk5vx8dIuEtyOs9ftrPzA/7izI2q.', 'SUPERMAN');
INSERT INTO mentors (first_name, last_name, email, date_of_arrival, date_of_departure, current_stage, info) VALUES ('name', 'surname', 'email@host.ext', 'DD/MM/YYYY', 'DD/MM/YYYY', 'Stage1', '{"bio":"paragraph", "purpose_of_visit": "paragraph", "mothers_name": "anything", "permission_email_status": false, "permit_request_status": false, "checklist_form_status": false, "signed_waiver_status": false, "fligh_information_status": false, "mentor_schedule_status": false, "permit_approval_status": false, "permit_number": "numbersAndLetters", "book_hotel_status": false, "schedule_inform_status": false, "schedule_approval_status": false, "schedule_to_google_status": false, "whatsapp_group_status": false, "share_final_files_status": false, "thanks_email": false, "fi_date_of_arrival": "DD/MM/YYY", "fi_time_of_arrival": "DD/MM/YYY", "fi_flight_number": "asdasd22"}');
INSERT INTO forms (form_name, vars) VALUES ('{"name": "permit Form"}', '{"home_phone": "0226988953"}');

COMMIT;
