-- The people at OMDB have complained that our site is making too many requests for Jaws. Update your movies app to store OMDB data in your own local database.

-- The first time a movie is searched for, your app will put results from OMDB as before. But those results will need to be stored locally so that subsequent requests for the same title can be served from YOUR database, without bothering the OMDB people again.

-- OMDB returns a lot of properties for each movie, just pick a few property to store, seriously.

-- extra notes
-- From the end user's perspective. movies 3 works in exactly the same as movies 2.
-- don't store search results, only store when user ask for a single movie details

CREATE DATABASE movies;

-- /c movies;

CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title TEXT,
    year INTEGER,
    poster TEXT
);

-- To insert into table upon click
INSERT INTO movies (title, year, poster) VALUES ('res["Title"]', 'res["Year"]', 'res["Poster"]');

-- Need to check for duplicates though