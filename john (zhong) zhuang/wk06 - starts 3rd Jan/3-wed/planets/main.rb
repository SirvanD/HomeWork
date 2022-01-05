require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'bcrypt'

enable :sessions

def logged_in?()
  if session[:user_id]
    return true
  else
    return false
  end
end

def loggedin_user()
  conn = PG.connect(dbname: 'planets_app')
  sql = "select * from users where id = #{session[:user_id]}"
  result = conn.exec(sql)
  user = result.first
  conn.close
  return user
end

def db_query(sql, params = [])
  conn = PG.connect(dbname: 'planets_app')
  planets = conn.exec_params(sql, params)
  conn.close
  return planets
end

def all_planets()
  db_query('select * from planets order by id ASC')
end

def create_planet(name, image_url, diameter, mass, moon_count)
  db_query("INSERT INTO planets (name, image_url, diameter, mass, moon_count) VALUES ($1, $2, $3, $4, $5)", [name, image_url, diameter, mass, moon_count])
end

def update_planet(name, image_url, diameter, mass, moon_count, id)
  sql = "UPDATE planets SET name = $1, image_url = $2, diameter = $3, mass = $4, moon_count = $5 WHERE id = $6;"
  db_query(sql, [name, image_url, diameter, mass, moon_count, id])
end

def delete_planet(id)
  sql = "DELETE FROM planets WHERE id = $1;"
  db_query(sql, [id])
end

get '/' do
  # conn = PG.connect(dbname: 'planets_app')
  # planets = conn.exec("SELECT * FROM planets ORDER BY id ASC;")
  # conn.close
  planets = all_planets()

  erb(:index, locals: {
    planets: planets
  })
end

get '/planets/new' do
  erb(:new)
end

# SHOW
get '/planets/:id' do
  planet_id = params["id"]
  conn = PG.connect(dbname: 'planets_app')
  planets = conn.exec("SELECT * FROM planets where id=#{planet_id};")
  planet = planets[0]
  conn.close

  erb(:planet_detail, locals: {
  planet: planet
  })
end

# CREATE
post '/planets' do
  # params.to_s
  # conn = PG.connect(dbname: 'planets_app')
  # conn.exec("INSERT INTO planets (name, image_url, diameter, mass, moon_count) VALUES ('#{params['name']}','#{params['image_url']}', '#{params['diameter']}', '#{params['mass']}', '#{params['moon_count']}');")
  # conn.close
  create_planet(params['name'], params['image_url'], params['diameter'], params['mass'], params['moon_count'])
  redirect '/'
end


# EDIT
get '/planets/:id/edit' do
  # sql = "SELECT * FROM planets WHERE id = #{params['id']};"
  # conn = PG.connect(dbname: 'planets_app')
  # result = conn.exec_params(sql)
  # conn.close

  # planet = result[0]
  
  planet = db_query("select * from planets where id = $1", [params['id']])[0]

  erb(:edit,locals: {
    planet: planet
    })
end
  
# UPDATE
put '/planets/:id' do
  
# sql = "UPDATE planets SET name = '#{params['name']}', image_url = '#{params['image_url']}', diameter = #{params['diameter']}, mass = #{params['mass']}, moon_count = #{params['moon_count']} WHERE id = #{params['id']};"

# conn = PG.connect(dbname: 'planets_app')
# conn.exec(sql)
# conn.close

update_planet(params['name'], params['image_url'], params['diameter'], params['mass'], params['moon_count'], params['id'])

redirect "/planets/#{params['id']}"
  
end

# DELETE
delete '/planets/:id/delete' do
  # sql = "DELETE FROM planets WHERE id = #{params['id']};"
  # conn = PG.connect(dbname: 'planets_app')
  # conn.exec(sql)
  # conn.close
  delete_planet(params['id'])
  redirect '/'
end


# USER SIGN UP
get '/signup' do
  erb(:signup)
end

post '/signup' do
  params.to_s
  password = params["password"]
  email = params["email"]
  conn = PG.connect(dbname: 'planets_app')
  password_digest = BCrypt::Password.create(password)
  sql = "insert into users (email, password_digest) values ('#{email}', '#{password_digest}');"
  conn.exec(sql)
  conn.close

  redirect '/'
end


# USER LOG IN
get '/login' do
  erb(:login)
end

post '/login' do
  params.to_s
  password = params["password"]
  email = params["email"]

  conn = PG.connect(dbname: 'planets_app')
  sql = "select * from users where email = '#{email}';"
  result = conn.exec(sql)
  conn.close

  if result.count > 0 && BCrypt::Password.new(result[0]['password_digest']).==(password)
    session[:user_id] = result[0]['id']
    redirect '/'
  else
    puts "please log in or sign up"
  end
end

# USER LOG OUT
delete '/login' do
  session[:user_id] = nil
  redirect "/"
end
