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
planets (name,image_url,diameter,mass,moon_count)
values('Mercury', 'https://cdn.mos.cms.futurecdn.net/xLXT69hv4k2U5pfKLBCanC-970-80.jpg',4878,3.3022*(10^23),0);

INSERT INTO 
planets (name,image_url,diameter,mass,moon_count)
values('Venus', 'https://cdn.mos.cms.futurecdn.net/oFF43BjXYUyyMTTJLFpeDE-970-80.jpg',12104,4.8685*(10^24),0);

INSERT INTO 
planets (name,image_url,diameter,mass,moon_count)
values('Earth', 'https://cdn.mos.cms.futurecdn.net/iveQRwfraabDLCWpQexrSM-970-80.jpg',12760,5.9736*(10^24),1);

INSERT INTO 
planets (name,image_url,diameter,mass,moon_count)
values('Mars', 'https://cdn.mos.cms.futurecdn.net/2KUL5GAYjMSqxkbKyRhgcH-970-80.jpg',6787,6.4185*(10^23),2);

INSERT INTO 
planets (name,image_url,diameter,mass,moon_count)
values('Jupiter', 'https://cdn.mos.cms.futurecdn.net/EQXNd38mgCj7tjRj8s5eCV-970-80.jpg',142800,1.8986*(10^27),67);

INSERT INTO 
planets (name,image_url,diameter,mass,moon_count)
values('Saturn', 'https://cdn.mos.cms.futurecdn.net/Q8sqQo2cX5CNRWUABTG4sX-970-80.jpg',120660,5.6846*(10^26),62);

INSERT INTO 
planets (name,image_url,diameter,mass,moon_count)
values('Uranus', 'https://cdn.mos.cms.futurecdn.net/EeSXcXu8APAvp2pJPmsWdD-970-80.jpg',51118,8.6810*(10^25),27);

INSERT INTO 
planets (name,image_url,diameter,mass,moon_count)
values('Neptune', 'https://cdn.mos.cms.futurecdn.net/h9tJU6wjnfJFtXEVzKY5V-970-80.jpg',49528,10.243*(10^25),14);

SELECT * FROM planets;