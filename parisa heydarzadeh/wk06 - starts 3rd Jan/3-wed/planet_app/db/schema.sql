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
planets (name,image_url)
values('Saturn','https://www.refinery29.com/images/10414424.jpg?format=pjpg&auto=webp&resize-filter=lanczos2&quality=65&sharpen=a3%2Cr3%2Ct0&optimize=low&width=1200&height=1200&crop=1%3A1%2Csmart&enable=upscale');

insert into
planets (name,image_url)
values('Mercury','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnr2FudsJsVk6fmAnoCR18o0PDRfwx2dXABw&usqp=CAU');

insert into
planets (name,image_url)
values('Mars','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziy9JXNKMUskuiNvIwkCuoKGT5C9mPqhFlw&usqp=CAU');

insert into
planets (name,image_url)
values('Venus','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlPYfOCHrge4rCmxmQVBkjhW0Ik3gJDag53A&usqp=CAU');
