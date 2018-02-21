BEGIN;

INSERT INTO users (username, email, password, role) VALUES ('Someone', 'Someone@something', '$2a$10$xItA5xyDjBfyLzyx5cumauyAJk5vx8dIuEtyOs9ftrPzA/7izI2q.', 'SUPERMAN');
INSERT INTO mentors (first_name, last_name, email, date_of_arrival, current_stage, info)
VALUES('Jameel', 'Dense', 'jameel.dense@gmail.com', '31/03/2018', 'Stage_1', '{"mothers_name": "Dalia","bio":"here is the bio", "fi_date_of_arrival": "28/02/2018", "fi_time_of_arrival":"22:22", "fi_flight_number":"4554","purpose_of_visit":"Mentoring", "photo": "/assets/images/avatar/large/molly.jpg"}'),
('Denes', 'King', 'denes.king@gmail.com', '01/04/2018', 'Stage_1', '{"mothers_name": "Suzan","bio":"here is the bio", "fi_date_of_arrival": "01/03/2018", "fi_time_of_arrival":"09:00", "fi_flight_number":"747","purpose_of_visit":"Mentoring", "photo": "/assets/images/avatar/large/steve.png"}'),
('Sarah', 'Mathues', 'sarah.mathues@gmail.com', '19/04/2018', 'Stage_1', '{"mothers_name": "Suzan","bio":"here is the bio", "fi_date_of_arrival": "05/03/2018", "fi_time_of_arrival":"13:00", "fi_flight_number":"777","purpose_of_visit":"Mentoring", "photo": "/assets/images/avatar/large/elliot.jpg"}');
INSERT INTO forms (form_name, vars) VALUES ('{"name": "permit Form"}', '{"home_phone": "0226988953"}');

COMMIT;
