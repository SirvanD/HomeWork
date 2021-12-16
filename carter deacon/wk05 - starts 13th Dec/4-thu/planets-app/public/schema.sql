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

-- Adding our solar system as a basis
INSERT INTO planets (name, image_url, diameter, mass, moon_count) VALUES ('Earth', 'https://i.guim.co.uk/img/media/b1ff96eca19397797793e838934075e298f03bea/0_0_1024_1024/master/1024.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=499857dac0f89d9c37454b4c9c61147a', 12742, 5973600000000000000000000, 1);

INSERT INTO planets (name, image_url, diameter, mass, moon_count) VALUES ('Mars', 'http://planetary-science.org/wp-content/uploads/2013/06/mars-600.jpg', 6779, 63600000000000000000000, 2);


INSERT INTO planets (name, image_url, diameter, mass, moon_count) VALUES ('Venus', 'https://media.nature.com/lw800/magazine-assets/d41586-021-01503-z/d41586-021-01503-z_19225478.jpg', 12104, 48700000000000000000000, 0);
