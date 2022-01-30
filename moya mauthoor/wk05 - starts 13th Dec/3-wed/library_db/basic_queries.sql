-- BASIC QUERIES
-- Unless otherwise stated, all queries should return all columns

-- Get all information about all authors
SELECT * FROM authors;

-- Get just the name and birth year of all authors
SELECT name, birth_year FROM authors;

-- Get all authors born in the 20th centruy or later
-- Apparently the 20th century starts on 1 Jan 1901?! I thought it was 1900 (derp derp). Anyway I searched to be inclusive of 1901 (but not 1900) but can amend if it's incorrect:
SELECT * FROM authors WHERE birth_year > 1900;

-- Get all authors born in the USA
SELECT * FROM authors WHERE nationality = 'United States of America';

-- Get all books published on 1985
SELECT * FROM books WHERE publication_date = 1985;

-- Get all books published before 1989
-- The following is not inclusive of 1989 itself; happy to revise if necessary
SELECT * FROM books WHERE publication_date < 1989;

-- Get just the title of all books.
SELECT title FROM books;

-- Get just the year that 'A Dance with Dragons' was published
  -- Cry when you realize how long it's been
  -- :'(
SELECT publication_date FROM books WHERE title = 'A Dance with Dragons';

-- Get all books which have `the` somewhere in their title (hint, look up LIKE/ILIKE)
SELECT * FROM books WHERE title ILIKE '%the %';

-- Add yourself as an author
INSERT INTO authors (name, nationality, birth_year) VALUES ('Moya Mauthoor', 'Australia', 1991);

-- Add two books that you'd like to write (you can hard-code your id as the author id)
INSERT INTO books (title, publication_date, author_id) VALUES ('This Time for Realsies: An Autobiography', 2020, 10);

INSERT INTO books (title, publication_date, author_id) VALUES ('If On a Schminter''s Night a Traveller', 2021, 10);

-- Update one of your books to have a new title
UPDATE books SET title = 'This Time for Realsies: A Poorly Recalled Memoir' WHERE title = 'This Time for Realsies: An Autobiography';

-- Delete your books
DELETE FROM books WHERE author_id = 10;

-- Delete your author entry
DELETE FROM authors WHERE name = 'Moya Mauthoor';