create database movies_app;

create table movies(
    id serial primary key,
    title varchar(255),
    year int,
    poster text,
    plot text
);

if not exists 
    (
        select 1 
        from movies 
        where title = 'movie1' 
        and year = 2022
    ) 
begin 
    insert movies (title, year) 
    values ('movie1', 2022) 
end;

insert into #temp (title, year)
values ('movie1', 2022);

insert into movies (title, year)
select * 
from #temp
where not exists
    (
        select 1 
        from movies 
        where title = 'movie1' 
        and year = 2022
    );



insert into movies (title, year)
select 'movie2', 2022
where not exists
    (
        select 1 
        from movies 
        where title = 'movie2' 
        and year = 2022
    );


insert into movies (title, year, poster, plot)
select '#{title}', #{year}, '#{poster}', '#{plot}'
where not exists
    (
        select 1 
        from movies 
        where title = '#{title}' 
        and year = #{year}
    );