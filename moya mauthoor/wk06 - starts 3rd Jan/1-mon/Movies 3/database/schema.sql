
CREATE DATABASE movies_app;

CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    name TEXT,
    poster_url TEXT,
    plot TEXT,
    year INTEGER,
    omdb_id TEXT
);

-- ALTER TABLE movies
-- ADD COLUMN omdb_id TEXT;

-- INSERT INTO movies (name, poster_url, plot, year, omdb_id) VALUES ('Jaws', 'https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg', 'When a killer shark unleashes chaos on a beach community off Long Island, it''s up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.', 1975, 'tt0073195');
