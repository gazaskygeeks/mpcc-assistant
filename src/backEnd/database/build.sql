BEGIN;

DROP TABLE IF EXISTS users, mentors, forms;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  role VARCHAR NOT NULL
);

CREATE TABLE mentors (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  date_of_arrival DATE NOT NULL,
  date_of_birth DATE,
  current_stage VARCHAR NOT NULL,
  info VARCHAR
);

CREATE TABLE forms (
  id SERIAL PRIMARY KEY,
  form_name VARCHAR NOT NULL,
  vars VARCHAR
);

INSERT INTO users (username, email, password, role) VALUES ('Someone', 'Someone@something', 'Somethingsmart', 'SUPERMAN');
INSERT INTO mentors (first_name, last_name, email, date_of_arrival, current_stage) VALUES ('Smart', 'Smarter', 'Smart@smart', TO_DATE('17/12/2015', 'DD/MM/YYYY'), 'ALMOST');
INSERT INTO forms (form_name, vars) VALUES ('Form name', 'the vars');
SELECT * FROM users where username='Someone';
COMMIT;
