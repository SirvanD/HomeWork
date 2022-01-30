CREATE DATABASE planets_app;

CREATE TABLE planets (
    id SERIAL PRIMARY KEY,
    name TEXT,
    image_url TEXT,
    diameter REAL,
    mass REAL,
    moon_count INTEGER
);

INSERT INTO planets (name, image_url, diameter, mass, moon_count) VALUES ('Mercury','https://nineplanets.org/wp-content/uploads/2019/09/mercury.png',4879.4, 0.055, 0);

INSERT INTO planets (name, image_url, diameter, mass, moon_count) VALUES ('Venus','https://nineplanets.org/wp-content/uploads/2019/09/venus.png',12104, 0.815, 0);

INSERT INTO planets (name, image_url, diameter, mass, moon_count) VALUES ('Earth','https://nineplanets.org/wp-content/uploads/2019/09/earth.png', 12742, 1, 1);

INSERT INTO planets (name, image_url, diameter, mass, moon_count) VALUES ('Mars','https://nineplanets.org/wp-content/uploads/2019/09/mars.png', 6779, 0.107, 2);

INSERT INTO planets (name, image_url, diameter, mass, moon_count) VALUES ('Jupiter', 'https://nineplanets.org/wp-content/uploads/2019/09/jupiter.png', 139820, 317.8, 79);

INSERT INTO planets (name, image_url, diameter, mass, moon_count) VALUES ('Saturn','https://nineplanets.org/wp-content/uploads/2019/09/saturn.png', 116460, 95.16, 82);

INSERT INTO planets (name, image_url, diameter, mass, moon_count) VALUES ('Uranus', 'https://nineplanets.org/wp-content/uploads/2019/09/uranus.png', 50724, 14.54, 27);

INSERT INTO planets (name, image_url, diameter, mass, moon_count) VALUES ('Neptune', 'https://nineplanets.org/wp-content/uploads/2019/09/neptune.png', 49244, 17.15, 14)

UPDATE planets SET diameter = 4879.4 WHERE name = 'Mercury';
UPDATE planets SET diameter = 12104 WHERE name = 'Venus';
UPDATE planets SET diameter = 12742 WHERE name = 'Earth';
UPDATE planets SET diameter = 6779 WHERE name = 'Mars';
UPDATE planets SET diameter = 139820 WHERE name = 'Jupiter';
UPDATE planets SET diameter = 116460 WHERE name = 'Saturn';
UPDATE planets SET diameter = 50724 WHERE name = 'Uranus';
UPDATE planets SET diameter = 49244 WHERE name = 'Neptune';