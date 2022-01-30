CREATE DATABASE planets_app;

\c planets_app

CREATE TABLE planets (
    id SERIAL PRIMARY KEY,
    name TEXT,
    image_url TEXT, 
    diameter REAL,
    mass REAL,
    moon_count INTEGER
);

INSERT INTO planets (name, image_url, diameter, mass, moon_count) VALUES ('Mercury', 'https://img.youtube.com/vi/uDQOi7dVfQQ/hqdefault.jpg', 4880, 3.3011E23, 0);

INSERT INTO planets (name, image_url, diameter, mass, moon_count) VALUES ('Venus', 'https://cdn.mos.cms.futurecdn.net/dzxtQ2dXH9SVKztJTbAXSA-320-80.jpg', 12103.6, 4.8657E24, 0);

INSERT INTO planets (name, image_url, diameter, mass, moon_count) VALUES ('Earth', 'https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-1200-80.jpg', 12742, 5.972E24, 1);

INSERT INTO planets (name, image_url, diameter, mass, moon_count) VALUES ('Mars', 'https://mars.nasa.gov/system/site_config_values/meta_share_images/1_mars-nasa-gov.jpg', 6779, 6.39E23, 2);