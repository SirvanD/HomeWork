-- BASIC QUERIES
-- Unless otherwise stated, all queries should return all columns
psql
\c library
-- Get all information about all authors
SELECT * FROM authors;
-- Get just the name and birth year of all authors
SELECT name, birth_year FROM authors;
-- Get all authors born in the 20th centruy or later
SELECT * FROM authors WHERE birth_year > 1900;
-- Get all authors born in the USA
SELECT * FROM authors WHERE nationality = 'United States of America';
-- Get all books published on 1985
SELECT * FROM books WHERE publication_date = 1985;
-- Get all books published before 1989
SELECT * FROM books WHERE publication_date < 1989;
-- Get just the title of all books.
SELECT title FROM books;
-- Get just the year that 'A Dance with Dragons' was published
  -- Cry when you realize how long it's been --published in 2011, but why cry? never heard of the book...
SELECT publication_date FROM books WHERE title = 'A Dance with Dragons';
-- Get all books which have `the` somewhere in their title (hint, look up LIKE/ILIKE)
SELECT * FROM books WHERE title ILIKE '%the%';
-- Add yourself as an author
INSERT INTO authors(name, nationality, birth_year) VALUES ('Siyu Guo', 'China', 2021);
-- Add two books that you'd like to write (you can hard-code your id as the author id)
INSERT INTO books (title, publication_date, author_id) VALUES ('A cat''s life', '2021', 9);
-- Update one of your books to have a new title
UPDATE books SET title = 'A hamster''s life' WHERE title = 'A cat''s life';
-- Delete your books
DELETE FROM books WHERE author_id = 9;
-- Delete your author entry
DELETE FROM authors WHERE name = 'Siyu Guo';