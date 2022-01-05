CREATE DATABASE movies3;

CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title TEXT,
    image_url TEXT,
    year INTEGER,
    plot TEXT
);


insert into 
movies(title, image_url,year, plot) 
values('Bing bang', 'https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.fansshare.com%2Fimage%2Fthebigbangtheory%2Fthe-big-bang-theory-hd-desktop-24425946.jpg&imgrefurl=http%3A%2F%2Fwww.fansshare.com%2Fgallery%2Fphotos%2F17153027%2Fthe-big-bang-theory-hd-desktop%2F&tbnid=v9vNmcJstSIEDM&vet=10CBUQxiAoA2oXChMI0Omuz9WR9QIVAAAAAB0AAAAAEAc..i&docid=U9y9OBOkWE2kDM&w=1069&h=1600&itg=1&q=big%20bang%20series%20image%20url&ved=0CBUQxiAoA2oXChMI0Omuz9WR9QIVAAAAAB0AAAAAEAc', '2020')

