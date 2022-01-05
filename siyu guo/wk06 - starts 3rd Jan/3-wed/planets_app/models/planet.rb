require 'pg'
require 'pry'
def db_query(sql, params = [])
    conn = PG.connect(dbname: 'planets_app')
    result = conn.exec_params(sql, params)
    conn.close
    return result
end

def all_planets()
    db_query('SELECT * FROM planets order by name asc;')
end

def create_planet(name, image_url, diameter, mass, moon_count)
    sql = "INSERT INTO planets (name, image_url, diameter, mass, moon_count) VALUES ($1, $2, $3, $4, $5);"
    db_query(sql, [name, image_url, diameter, mass, moon_count])
end

def delete_planet(id)
    db_query("DELETE FROM planets WHERE id = $1;", [id])
end

def update_planet(name, image_url, diameter, mass, moon_count, id)
    sql = "UPDATE planets set name = $1, image_url = $2, diameter = $3, mass = $4, moon_count = $5 WHERE id = $6;"

    db_query(sql, [name, image_url, diameter, mass, moon_count, id])
end