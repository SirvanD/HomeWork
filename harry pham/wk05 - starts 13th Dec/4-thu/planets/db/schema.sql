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

insert into planets (name, image_url, diameter, mass, moon_count) values ('earth', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1200px-The_Earth_seen_from_Apollo_17.jpg', 12742, 5.97, 1);

insert into planets (name, image_url, diameter, mass, moon_count) values('saturn', 'https://services.meteored.com/img/article/en-saturno-llueven-diamantes-263801-1.jpg', 116460, 5.683, 82);
