CREATE DATABASE moviedb;

CREATE TABLE movies(
    id SERIAL PRIMARY KEY,
    title TEXT,
    year INTEGER,
    poster TEXT
);

INSERT INTO movies(title,year,poster) VALUES('aaa',2010,'http://dfjd.com');