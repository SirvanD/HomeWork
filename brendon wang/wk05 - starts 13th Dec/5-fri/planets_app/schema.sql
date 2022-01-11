CREATE DATABASE planets_app

CREATE TABLE planets (
    id SERIAL PRIMARY KEY,
    name TEXT,
    url TEXT,
    diameter integer,
    mass integer,
    moon_count integer
);
