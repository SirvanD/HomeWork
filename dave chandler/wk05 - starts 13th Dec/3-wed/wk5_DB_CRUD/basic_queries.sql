-- select all columns from all rows
SELECT * FROM authors;

-- select only some columns, from all rows
SELECT name, birth_year FROM authors;

-- select rows that meet certain criteria
SELECT * FROM authors WHERE name = 'James Baldwin';

UPDATE authors SET name = 'Adam B.', birth_year = 1986 WHERE name = 'Adam Bray';

DELETE FROM authors WHERE name = 'Adam B.';

INSERT INTO authors(name, birth_year) VALUES ('Steven Hawking', 1920);

DELETE FROM authors WHERE birth_year < 1900;

SELECT * FROM authors WHERE name LIKE 'S%'

