CREATE DATABASE planets_app;

CREATE TABLE planets (
    id SERIAL PRIMARY KEY,
    name TEXT,
    image_url TEXT, 
    diameter REAL,
    mass REAL,
    moon_count INTEGER
);

INSERT INTO planets (name, image_url, diameter, mass, moon_count) VALUES ('Saturn', 'https://solarsystem.nasa.gov/system/resources/detail_files/2490_stsci-h-p1943a-f_1200.jpg', 120536, 5.683 * 10^26, 82);