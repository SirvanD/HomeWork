require 'pry'

def db_query(sql, params = [])
    conn = PG.connect( dbname: 'planets_app' )
    binding.pry
    result = conn.exec_params(sql, params) #always returns an array
    conn.close
    return result 
end

# MVC model view controller 
# main rb acts as like, your traffic controller, it takes the requests and directs them to the correct function 

def all_planets()
    db_query('select * from planets order by name;') 
end
  
  
def create_planet(name, image_url, diameter, mass, moon_count) 
    sql = "insert into planets (name, image_url, diameter, mass, moon_count) values ($1, $2, $3, $4, $5)"
    db_query(sql, [name, image_url,diameter, mass, moon_count])
end
  
  
def delete_planet(id)
    db_query("delete from planets where id = $1;", [id])
end
  

def update_planet(name, image_url, id)
    sql("update planets set name = $1, image_url = $2, id = $3,;")
    dq_query(sql(name, image_url, id))
end

