CREATE DATABASE planet_app;

CREATE TABLE planets (
    id SERIAL PRIMARY KEY,
    name TEXT,
    image_url TEXT, 
    diameter REAL,
    mass REAL,
    moon_count INTEGER
);

insert into
planets (name, image_url, diameter, distance, mass, moon_count)
values('Saturn', 'https://space-facts.com/wp-content/uploads/saturn.png', 120.536, 1433.5, 568, 82);

insert into
planets (name, image_url, diameter, distance, mass, moon_count)
values('Mercury', 'https://www.abc.net.au/news/image/11297326-3x2-700x467.jpg', 4879, 57.9, 0.330, 0);

insert into
planets (name, image_url, diameter, distance, mass, moon_count)
values('Mars', 'https://specials-images.forbesimg.com/imageserve/5d8b411618444200084e7835/960x0.jpg?cropX1=0&cropX2=1599&cropY1=0&cropY2=899', 6792, 227.9, 0.642, 2);

insert into
planets (name, image_url, diameter, distance, mass, moon_count)
values('Venus', 'http://www.astronomy.com/-/media/Images/News%20and%20Observing/News/2019/05/Venus1.jpg?mw=600', 12.104, 108.2, 4.87, 0);

insert into planets (name, image_url, diameter, distance, mass, moon_count)
values ('Jupiter', 'https://space-facts.com/wp-content/uploads/jupiter.png', 142.984, 778.6, 1898, 79);

insert into planets (name, image_url, diameter, distance, mass, moon_count)
values ('Pluto', 'https://nineplanets.org/wp-content/uploads/2019/09/pluto-1.png', 2370, 5906.4, 0.0146, 5);