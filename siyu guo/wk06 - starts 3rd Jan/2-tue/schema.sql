-- store students
-- each record will have a name and a grade

-- create a table to store students - sheet
-- records - row
-- name, grade - columns

-- \q
-- \l
-- \c connect to database \c school
-- \dt describe table - how many tables
-- \d describe individual table in detail


--psql (can only type two types of things)
    --slash commands
    --sql

-- 4 main operators
-- read - see what's in there | select
-- create - create some data | insert
-- update
-- destroy-- delete - remove some info



-- CREATE DATABASE OMDB;
createdb OMDB

CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title TEXT,
    year INTEGER,
    poster TEXT,
    plot TEXT
);

-- --SELECT
-- SELECT name, grade FROM students;

-- --select name, grade from students;
-- INSERT INTO students (name, grade) VALUES ('brendon', 4);
-- INSERT INTO students (name, grade) VALUES ('matt', 69);

-- select name, grade from students where grade > 10;

-- select * from students where grade = 69;

-- UPDATE students SET grade = 5 WHERE name = 'brendon';

-- select * from students order by grade desc;
-- select * from students order by name;
-- DELETE FROM students WHERE ; --delete record
-- DROP TABLE students; --delete the whole table
