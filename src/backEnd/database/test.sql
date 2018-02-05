BEGIN;

INSERT INTO users (username, email, password, role) VALUES ('Someone', 'Someone@something', 'Somethingsmart', 'SUPERMAN');
INSERT INTO mentors (first_name, last_name, email, date_of_arrival, current_stage) VALUES ('Smart', 'Smarter', 'Smart@smart', TO_DATE('17/12/2015', 'DD/MM/YYYY'), 'ALMOST');
INSERT INTO forms (form_name, vars) VALUES ('Form name', 'the vars');
SELECT * FROM users where username='Someone';

COMMIT;
