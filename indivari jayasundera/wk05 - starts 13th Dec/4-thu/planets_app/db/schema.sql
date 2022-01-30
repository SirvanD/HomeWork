CREATE DATABASE planets_app;

CREATE TABLE planets (
    id SERIAL PRIMARY KEY,
    name TEXT,
    image_url TEXT, 
    diameter REAL,
    mass REAL,
    moon_count INTEGER
);

INSERT INTO 
planets(name, image_url,diameter,mass,moon_count) 
VALUES ('Mercury','https://png.pngitem.com/pimgs/s/38-384191_mercury-mercury-planet-png-transparent-png-download.png',489,3285,0);

INSERT INTO 
planets(name, image_url,diameter,mass,moon_count) 
VALUES ('venus','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeFmUmcxqswdMHizfcMqNISahN3HhjsRTxyskCWOl-05Lbfsxf_Pakeb0P2D8rQUgXPgk&usqp=CAU',400,3283,0);

INSERT INTO 
planets(name, image_url,diameter,mass,moon_count) 
VALUES ('Earth','https://pbs.twimg.com/media/DyoxVK2UUAI6lP4.jpg
Mars',400,3283,1);