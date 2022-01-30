require 'pg'

def db_query(sql, params = [])
  conn = PG.connect(dbname: 'planets_app')
  result = conn.exec_params(sql, params) # exec_params always return an array
  conn.close
  return result
end

# MVC

# model view controller
# separation of concerns

def all_planets()
  db_query('select * from planets order by name;')
end

def create_planet(name, image_url)
  sql = "insert into planets (name, image_url) values ($1, $2)"
  db_query(sql, [name, image_url])
end

def delete_planet(id)
  db_query("delete from planets where id = $1;", [id])
end

def update_planet(name, image_url, id)
  sql = "update planets set name = $1, image_url = $2 where id = $3;"
  db_query(sql, [name, image_url, id])
end