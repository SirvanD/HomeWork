require 'pg'

def db_query(sql, params = [])
    conn = PG.connect(dbname: 'planets_app')
    result = conn.exec_params(sql, params)
    conn.close
    return result
end

def all_planets()
    db_query("SELECT * FROM planets ORDER BY name;")
end

def create_planet(name, image_url, diameter, mass, moon_count)
    sql = "INSERT INTO planets (name, image_url, diameter, mass, moon_count) VALUES ($1, $2, $3, $4, $5);"
    db_query(sql, [name, image_url, diameter, mass, moon_count])
end

def delete_planet(id)
    db_query("DELETE FROM planets WHERE id = $1;", [id])
end

# Continues to say "undefined method "update_planet" and not sure exactly why. Other functions work fine. Works fine just using the db_query commented out in main.rb
def update_planet(name, image_url, diameter, mass, moon_count, id)
    sql = "UPDATE planets SET name = $1, image_url = $2, diameter = $3, mass = $4, moon_count = $5 WHERE id = $6;"
    db_query(sql, [name, image_url, diameter, mass, moon_count, id])
end