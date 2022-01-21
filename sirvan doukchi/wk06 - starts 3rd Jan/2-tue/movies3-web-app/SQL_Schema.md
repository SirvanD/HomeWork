psql to enter postgress before creating db
\l list all dbs
\c db connects to db then can create tables

//create DB
create database movies;

//Create table
create table shows (
id serial primary key,
show_title varchar(200),
show_year varchar(200),
show_plot text,
show_poster_url text

);

// Insert into DB

sql = "INSERT INTO shows (show_title,show_year,show_plot,show_poster_url)values('#{title}','#{year}','#{plot}','#{poster}');"

conn = PG.connect(dbname: 'movies')
conn.exec(sql)
conn.close

//
