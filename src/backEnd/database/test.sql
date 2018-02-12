BEGIN;

INSERT INTO users (username, email, password, role) VALUES ('Someone', 'Someone@something', '$2a$10$xItA5xyDjBfyLzyx5cumauyAJk5vx8dIuEtyOs9ftrPzA/7izI2q.', 'SUPERMAN');
INSERT INTO mentors (first_name, last_name, email, date_of_arrival, current_stage, info) VALUES ('Smart', 'Smarter', 'Smart@smart', '12/12/2018', 'ALMOST', '{"mothers_name": "anything", "bio":"salam", "purpose_of_visit":"dalloul"}');
INSERT INTO forms (form_name, vars) VALUES ('{"name": "permit Form"}', '{"home_phone": "0226988953"}');
SELECT * FROM users where username='Someone';

COMMIT;
