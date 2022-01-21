CREATE DATABASE planets_app;

CREATE TABLE planets (
    id SERIAL PRIMARY KEY,
    name TEXT,
    image_url TEXT,
    diameter REAL,
    mass REAL,
    moon_count INTEGER
);

CREATE TABLE users (
  id SERIAL  PRIMARY KEY,
  email TEXT,
  password_digest TEXT
);

