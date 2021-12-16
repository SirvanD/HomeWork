CREATE DATABASE goodfoodhunting;

-- remember to connect to the db before you create tables

CREATE TABLE dishes (

    id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    image_url TEXT

);

INSERT INTO dishes (name, image_url) 
VALUES ('Double Decker Chocolate', 'https://www.cakesandbakes.co.uk/files/double-decker-front.png');

INSERT INTO dishes (name, image_url) 
VALUES ('Another dish', 'https://www.cakesandbakes.co.uk/files/double-decker-front.png');