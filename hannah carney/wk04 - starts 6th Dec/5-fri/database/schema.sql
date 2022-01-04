create database movies; 


create table movies (
    id SERIAL PRIMARY KEY,
    name varchar(200),
    plot char(500),
    poster text,
    year integer
);