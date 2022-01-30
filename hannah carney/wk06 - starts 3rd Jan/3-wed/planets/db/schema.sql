CREATE DATABASE planets_app;

-- remember to connect to the db before we create tables 
\c planets_app

CREATE TABLE planets (
    id SERIAL PRIMARY KEY,
    name TEXT,
    image_url TEXT, 
    diameter REAL,
    mass REAL,
    moon_count INTEGER
);

insert into 
planets (name, image_url, diameter, mass, moon_count) 
values ('Mercury', 'https://i.imgur.com/BpPcywq.png', '4875', '0.330', '0' );

insert into 
planets (name, image_url, diameter, mass, moon_count) 
values ('Venus', 'https://www.pngall.com/wp-content/uploads/11/Venus-PNG-Background.png', '12104', '4.87', '0' );

insert into 
planets (name, image_url, diameter, mass, moon_count) 
values ('Earth', 'https://i.imgur.com/2V9lCK7.png', '12742', '5.97', '1' );

insert into 
planets (name, image_url, diameter, mass, moon_count) 
values ('Mars', 'https://i.imgur.com/gZraw3b.png','6779','0.642','2');

insert into 
planets (name, image_url, diameter, mass, moon_count) 
values ('Jupiter','https://i.imgur.com/F2Wfps9.png','139820','1898','79' );

insert into 
planets (name, image_url, diameter, mass, moon_count) 
values ('Saturn','https://i.imgur.com/P2shLaM.png', '116460','568', '82' );

insert into 
planets (name, image_url, diameter, mass, moon_count) 
values ('Uranus', 'https://i.imgur.com/8bSWdDr.png', '50724','86.8','27' );

insert into 
planets (name, image_url, diameter, mass, moon_count) 
values ('Neptune', 'https://i.imgur.com/0QDKtv3.png', '49244', '102', '14' );