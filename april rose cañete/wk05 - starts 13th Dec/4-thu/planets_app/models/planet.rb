require 'sinatra'
require 'sinatra/reloader'
require 'pg'

def db_query(sql, params = [])
    conn = PG.connect(dbname: 'planets_app')

    result = conn.exec_params(sql, params)

    conn.close

    return result
end

def all_planets()
    return db_query("select * from planets order by id;")
end

def add_planet(name, image_url, diameter, mass, moon_count)
    sql = "insert into planets(name, image_url, diameter, mass, moon_count) values($1, $2, $3, $4, $5);"
    
    return db_query(sql, [name, image_url, diameter, mass, moon_count])
end

def update_planet(name, image_url, diameter, mass, moon_count, id)
    sql = "update planets
        set name = $1,
            image_url = $2,
            diameter = $3,
            mass = $4,
            moon_count = $5
        where id = $6;"

    return db_query(sql, [name, image_url, diameter, mass, moon_count, id])
end

def delete_planet(id)
    sql = "delete from planets where id = $1;"

    return db_query(sql, [id])
end

