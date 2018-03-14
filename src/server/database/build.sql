BEGIN;

DROP TABLE IF EXISTS users, mentors;

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
  date_of_arrival VARCHAR NOT NULL,
  date_of_departure VARCHAR,
  current_stage VARCHAR NOT NULL,
  info JSON
);

COMMIT;
