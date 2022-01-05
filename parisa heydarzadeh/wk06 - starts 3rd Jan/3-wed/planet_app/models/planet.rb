require 'pg'

def db_query(sql, params = [])
  conn = PG.connect(dbname: 'planet_app')
  result = conn.exec_params(sql, params) 
  conn.close
  return result
end


def all_planets()
  db_query('select * from planets order by name;')
end

def create_planet(name, image_url, diameter, mass, moon_count)
  sql = "insert into planets (name, image_url, diameter, mass, moon_count) values ($1, $2, $3, $4, $5)"
  db_query(sql, [name, image_url])
end

def delete_planet(id)
  db_query("delete from planet where id = $1;", [id])
end

def update_planet(name, image_url, id, diameter, mass, moon_count)
  sql = "update planets set name = $1, image_url = $2 where id = $3, diameter=$4, mass= $5, moon_count=$6;"
  db_query(sql, [name, image_url, id,diameter, mass, moon_count])
end