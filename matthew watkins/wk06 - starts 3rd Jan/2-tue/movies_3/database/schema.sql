CREATE DATABASE movies_app;

/c movies_app

CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    name TEXT,
    image_url TEXT,
    plot TEXT,
    year INTEGER
);