     
require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'bcrypt'

enable :sessions

def logged_in?
  if session[:user_id]
    return true
  end
end

def current_user()
  sql = "SELECT * FROM users WHERE id = $1;"
  user = db_query(sql, [session[:user_id]]).first
  return OpenStruct.new(user)
end

def db_query(sql, params = [])
  conn = PG.connect(dbname: 'planets_app')
  result = conn.exec_params(sql, params)
  conn.close
  return result
end

# Homepage
get '/' do
  planets = db_query("SELECT * FROM planets ORDER BY name;")
  erb :index, locals: {planets: planets}
end

# Add planet page
get '/planets/new' do
  erb :name_planet
end

# New planet form submission
post '/planets' do
  name = params["name"]
  image_url = params["image_url"]
  diameter = params["diameter"]
  mass = params["mass"]
  moon_count = params["moon_count"]
  db_query("INSERT INTO planets (name, image_url, diameter, mass, moon_count) VALUES ($1, $2, $3, $4, $5);", [name, image_url, diameter, mass, moon_count])
  redirect '/'
end

get '/planets/:id' do
  planet_id = params['id']
  planet = db_query("SELECT * FROM planets WHERE id = $1;", [planet_id]).first
  erb :show_planet, locals: {planet: planet}
end

# Delete a planet
delete '/planets/:id' do
  db_query("DELETE FROM planets WHERE id = #{params['planet_id']};")
  redirect '/'
end

# Edit a planet page
get '/planets/:id/edit' do
  planet = db_query("SELECT * FROM planets WHERE id = $1", [params['id']]).first
  erb :edit_planet, locals: {planet: planet}
end

# Edit planet form submission
put '/planets/:id' do
  db_query("UPDATE planets SET name = '#{params['name']}', image_url = '#{params['image_url']}', diameter = #{params['diameter']}, mass = #{params['mass']}, moon_count = #{params['moon_count']} WHERE id = #{params['id']};")
  redirect "/planets/#{params['id']}"
end

get '/login' do
  erb :login
end

post '/session' do
  email = params['email']
  password = params['password']
  sql = "SELECT * FROM users WHERE email = $1;"
  result = db_query(sql, [email])
  if result.count > 0 && BCrypt::Password.new(result[0]['password_digest']) == password
    session[:user_id] = result[0]['id']
    redirect '/'
  else
    erb :login
  end
end

delete '/session' do 
  session[:user_id] = nil
  redirect '/login'
end