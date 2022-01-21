
CREATE DATABASE searched_movies;

CREATE TABLE movies(
    id SERIAL PRIMARY KEY,
    title TEXT,
    year INTEGER,
    poster TEXT
);