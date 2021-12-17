-- BASIC QUERIES
-- Unless otherwise stated, all queries should return all columns

-- Get all information about all authors
SELECT * FROM authors;

-- Get just the name and birth year of all authors
SELECT name, birth_year FROM authors;

-- Get all authors born in the 20th centruy or later
select * from authors where birth_year > 1901;

-- Get all authors born in the USA
select * from authors where nationality = 'United States of America';

-- Get all books published on 1985
select * from books where publication_date = 1985;
-- Get all books published before 1989
select * from books where publication_date < 1989;
-- Get just the title of all books.
select title from books;
-- Get just the year that 'A Dance with Dragons' was published
select publication_date from books where title = 'A Dance with Dragons';
-- Get all books which have `the` somewhere in their title (hint, look up LIKE/ILIKE)
SELECT * FROM books WHERE title LIKE '%the%';
-- Add yourself as an author
insert into authors (name, nationality, birth_year) values ('paris', 'persian',2000);
-- Add two books that you'd like to write (you can hard-code your id as the author id)
insert into books (title, publication_date, author_id) values ('dark',2021, 85);
insert into books (title, publication_date, author_id) values ('Great Gatsby', 2002, 85);
-- Update one of your books to have a new title
update books set title = 'firstbook' where title = 'dark';
-- Delete your books
delete from books where author_id = 85;
-- Delete your author entry
delete from books where author_id = 85;
