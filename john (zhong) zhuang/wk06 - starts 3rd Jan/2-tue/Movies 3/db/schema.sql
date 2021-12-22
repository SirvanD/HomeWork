CREATE DATABASE movies_app;

\c movies_app

CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title TEXT,
    language TEXT,
    year TEXT,
    rate TEXT,
    director TEXT,
    actors TEXT,
    plot TEXT,
    poster TEXT
);