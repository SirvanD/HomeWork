CREATE DATABASE movielab;

CREATE TABLE moive (
    id SERIAL PRIMARY KEY,
    Title TEXT,
    Year INTEGER,
    Genre TEXT,
    Director TEXT,
    Plot TEXT
);

SELECT * FROM moive;


