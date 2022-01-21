     
require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'bcrypt'

require_relative 'models/planets.rb'

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

# Homepage
get '/' do
  planets = all_planets()
  erb :index, locals: {planets: planets}
end

# Add planet page
get '/planets/new' do
  erb :name_planet
end

# New planet form submission
post '/planets' do
  create_planet(params["name"], params["image_url"], params["diameter"], params["mass"], params["moon_count"])
  redirect '/'
end

get '/planets/:id' do
  planet_id = params['id']
  planet = db_query("SELECT * FROM planets WHERE id = $1;", [planet_id]).first
  erb :show_planet, locals: {planet: planet}
end

# Delete a planet
delete '/planets/:id' do
  delete_planet(params['id'])
  redirect '/'
end

# Edit a planet page
get '/planets/:id/edit' do
  planet = db_query("SELECT * FROM planets WHERE id = $1", [params['id']]).first
  erb :edit_planet, locals: {planet: planet}
end

# Edit planet form submission
put '/planets/:id' do
  name = params['name']
  image_url = params['image_url']
  diameter = params['diameter']
  mass = params['mass']
  moon_count = params['moon_count']
  id = params['id']
  #  This doesn't work
  # update_planet(name, image_url, diameter, mass, moon_count, id)
  db_query("UPDATE planets SET name = '#{name}', image_url = '#{image_url}', diameter = #{diameter}, mass = #{mass}, moon_count = #{moon_count} WHERE id = #{id};")
  redirect "/planets/#{id}"
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