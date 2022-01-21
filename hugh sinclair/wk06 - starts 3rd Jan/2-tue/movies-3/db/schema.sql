CREATE DATABASE goodmoviehunting;

CREATE TABLE 
movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200),
    year VARCHAR(200),
    plot TEXT,
    image_url TEXT
);

INSERT INTO movies (title, year, plot, image_url) VALUES ('#{title}','#{year}','#{plot}','#{image_url}');