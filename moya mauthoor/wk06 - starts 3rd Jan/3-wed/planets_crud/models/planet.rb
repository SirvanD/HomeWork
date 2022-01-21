require "pg"

def db_query(sql, params = [])
    conn = PG.connect( dbname: 'planets_app')
    result = conn.exec_params(sql, params)
    conn.close
    return result
end

# These functions aren't working yet, will troubleshoot tomorrow
def all_planets()
    db_query("SELECT * FROM planets ORDER BY name;")
end

def create_planet(name, image_url, diameter, mass, moon_count)
    sql = "INSERT INTO planets (name, image_url, diameter, mass, moon_count) VALUES ($1, $2, $3, $4, $5);"
    db_query(sql, [name, image_url, diameter, mass, moon_count])
end
  
def delete_planet(id)
    sql = "DELETE FROM planets WHERE id = $1;"
    db_query(sql, [id])
end

def update_planet(name, image_url, id)
    sql = "UPDATE planets SET name = $1, image_url = $2 WHERE id = $3;"
    db_query(sql, [name, image_url, id])
end