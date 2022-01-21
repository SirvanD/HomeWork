require 'sinatra'
require 'pg'
require 'sinatra/reloader'
require 'bcrypt'
require_relative 'models/planet.rb'
require_relative 'models/user.rb'
require 'pry'
enable :sessions

def logged_in?()
  if session[:user_id]
    return true
  else
    return false
  end
end

def admin?()
  if session[:user_id] == "5"
    return true
  else
    return false
  end
end

def current_user() 
  sql = "SELECT * FROM users WHERE id = #{ session[:user_id] }"
  user = db_query(sql).first
  return OpenStruct.new(user)
end



# get /venues/new - and updated corresponding route in index.erb
# post /venues -and updated route in new.erb

# get /venues/:id/edit
# get /venues/:id/ -

# delete /venues/:id

get '/' do
  result = all_planets()
  erb(:index, locals: {
    planets: result
  })
end

get '/planets/:id/edit' do
  redirect '/login' unless logged_in?
  sql = "SELECT * FROM planets WHERE id = $1;"
  planet = db_query(sql, [params['id']]).first
  erb(:update, locals:{
    planet: planet
  })
end

get '/planets/:id' do
  planet_id = params['id']
  planet = db_query("SELECT * FROM planets WHERE id = $1", [planet_id]).first
  # "Planet Data for #{planet_id}"
  erb(:show, locals: { planet: planet })
end

get '/planets/new' do
  redirect '/login' unless logged_in?
  erb(:new)
end

post '/planets' do
  redirect '/login' unless logged_in?
  create_planet(params['name'], params['image_url'], params['diameter'], params['mass'], params['moon_count'])
  redirect "/"
end

delete 'planets/:id' do
  delete_planet([params['id']])
  redirect "/"
end


put '/planets/:id' do
  update_planet(
    params['name'],
    params['image_url'],
    params['diameter'],
    params['mass'],
    params['moon_count'],
    params['id']
  )
  redirect "/planets/#{params['id']}"
end

get '/users/new' do
  erb(:register)
end

post "/users" do
    create_user(params['email'], params['password'])
    redirect '/login'
end

get '/login' do
  erb :login
end

post '/session' do
    email = params["email"]
    password = params["password"]
    result = db_query("SELECT * FROM users WHERE email = '#{email}';")

  # BCrypt::Password.create(password)
    if result.count > 0 && BCrypt::Password.new(result[0]['password_digest']) == password
      # single source of truth
      # thats why we are only writing down the id in the session
      # write down this user is logged in
      session[:user_id] = result[0]['id']# it is a hash / session for a single user
      redirect '/'
    else
      erb :login
    end
  # will return an empty array if no record is found or can use binding.pry to have a look
  #result.count returned 0 in terminal after binding.pry
  # return result.to_a.to_s
  # password
  # check if password is correct
end

delete '/session' do 
  session[:user_id] = nil
  redirect "/login"
end

