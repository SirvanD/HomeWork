CREATE DATABASE planets_app;

CREATE TABLE planets (
    id SERIAL PRIMARY KEY,
    name TEXT,
    image_url TEXT, 
    diameter REAL,
    mass REAL,
    moon_count INTEGER
);


insert into
planets (name,image_url)
values('Saturn','https://solarsystem.nasa.gov/system/stellar_items/image_files/38_saturn_1600x900.jpg');

insert into
planets (name,image_url)
values('Mercury','https://www.universetoday.com/wp-content/uploads/2009/08/Mercury-e1418849404713-1280x720.jpg');

insert into
planets (name,image_url)
values('Mars','https://cdn.mos.cms.futurecdn.net/L868HCTDT8ueAXXrcyXoWc.jpg');

insert into
planets (name,image_url)
values('Vensu','https://cdn.mos.cms.futurecdn.net/kaPwBjHiUKax8syodHNPmF.jpg');



