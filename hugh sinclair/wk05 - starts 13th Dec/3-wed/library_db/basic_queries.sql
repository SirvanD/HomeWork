-- BASIC QUERIES
-- Unless otherwise stated, all queries should return all columns

-- Get all information about all authors
SELECT * FROM authors;

-- Get just the name and birth year of all authors
SELECT name, birth_year FROM authors;

-- Get all authors born in the 20th centruy or later
SELECT * FROM authors WHERE birth_year > 1901;

-- Get all authors born in the USA
SELECT * FROM authors WHERE nationality = 'United States of America';

-- Get all books published on 1985
SELECT * FROM books WHERE publication_date = 1985;

-- Get all books published before 1989
SELECT * FROM books WHERE publication_date < 1989;

-- Get just the title of all books.
SELECT title FROM books;

-- Get just the year that 'A Dance with Dragons' was published
select publication_date from books where title = 'A Dance with Dragons';
  -- Cry when you realize how long it's been
  -- way ahead of you


-- Get all books which have `the` somewhere in their title (hint, look up LIKE/ILIKE)
select * from books where title ILIKE '%the %';

-- Add yourself as an author
INSERT INTO authors(name, nationality, birth_year) VALUES ('Hugh Sinclair', 'Australia', 1993);

-- Add two books that you'd like to write (you can hard-code your id as the author id)
INSERT INTO books(title, publication_date, author_id) VALUES ('CSS and me, a love hate relationship', 2021, 10);
INSERT INTO books(title, publication_date, author_id) VALUES ('Ducks are amazing', 2021, 10);
-- Update one of your books to have a new title
UPDATE books SET title = 'SQL, be the change' WHERE title = 'Ducks are amazing';
-- Delete your books
DELETE * FROM books WHERE author_id = 10;
-- Delete your author entry
delete from authors where name = 'Hugh Sinclair';