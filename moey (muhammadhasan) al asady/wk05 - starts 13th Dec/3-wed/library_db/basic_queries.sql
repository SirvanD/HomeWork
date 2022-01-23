-- BASIC QUERIES
-- Unless otherwise stated, all queries should return all columns

-- Get all information about all authors
SELECT * FROM authors ORDER BY name  asc;

-- Get just the name and birth year of all authors
SELECT name, birth_year FROM authors;


-- Get all authors born in the 20th centruy or later
SELECT * FROM authors WHERE birth_year > 1910;


-- Get all authors born in the USA
SELECT name, nationality FROM authors;
select nationality from authors;
select * from authors where nationality = 'United States of America';



-- Get all books published on 1985
select * from books where publication_date = 1985; 

-- Get all books published before 1989
select * from books where publication_date < 1989; 

-- Get just the title of all books.
select title from books ;


-- Get just the year that 'A Dance with Dragons' was published
  -- Cry when you realize how long it's been
select publication_date from books where title = 'A Dance with Dragons';

-- Get all books which have `the` somewhere in their title (hint, look up LIKE/ILIKE)
select * from books where title like '%the%';

-- Add yourself as an author
INSERT INTO authors(name) VALUES ('Moey');

-- Add two books that you'd like to write (you can hard-code your id as the author id)
insert into books (title, publication_date, author_id) VALUES ('winging it', 2020, 17 );
insert into books (title, publication_date, author_id) VALUES ('idk', 2021, 17 );

-- Update one of your books to have a new title
UPDATE books
SET title='wot'
WHERE title='winging it';
-- Delete your books
DELETE FROM books WHERE title='wot';
DELETE FROM books WHERE title='idk';


-- Delete your author entry
DELETE FROM authors WHERE name ='Moey';
