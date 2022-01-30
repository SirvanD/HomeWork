CREATE DATABASE OMDB_movies;

\c omdb_movies

CREATE TABLE movies (
    id serial primary key,
    title TEXT,
    date integer,
    plot TEXT,
    poster TEXT
);

insert into movies (title, date, plot, poster) values ('','','','');