-- BASIC QUERIES
-- Unless otherwise stated, all queries should return all columns

-- Get all information about all authors
library * from authors
-- Get just the name and birth year of all authors
select name, birth year from authors
-- Get all authors born in the 20th centruy or later
select birth_year from authors where birth_year > 1901;
-- Get all authors born in the USA
select * from authors where nationality = 'United States of America';
-- Get all books published on 1985
select * from books where publication_date=1985;
-- Get all books published before 1989
select * from books where publication_date < 1989;
-- Get just the title of all books.
select title from books;
-- Get just the year that 'A Dance with Dragons' was published
  select publication_date from books where title = 'A Dance with Dragons';
  -- Cry when you realize how long it's been
  *successfully cries*
-- Get all books which have `the` somewhere in their title (hint, look up LIKE/ILIKE)
select title from books where title like '%the%';
-- Add yourself as an author
INSERT into authors (name, nationality, birth_year)
values('matthew watkins', 'Dutch', 1997)
;
-- Add two books that you'd like to write (you can hard-code your id as the author id)
insert into books(title, publication_date)
values('why i am good at baking', 2017); // insert into books(title, publication_date)
values('the life of matthew', 2021);
-- Update one of your books to have a new title
update books set title = 'why i am the best at baking' where title = 'why i am good at baking' 
-- Delete your books
delete from books where title = 'why i am the best at baking'
delete from books where title = 'the life of matthew'
-- Delete your author entry
delete from authors where name = 'matthew watkins'