     
require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'bcrypt' # for when you make users to make the login/signup process secure
require 'pry'
require_relative 'models/planets_functions.rb'


get '/' do
  result = db_query("select * from planets order by name;")
  planets = all_planets()
  


  erb :index, locals: { # these lines actually return a string - takes the template, combine it with the data and then thats what you see on the page 
    planets: planets
  }
 
end

get '/planets/:id' do
  planet_id = params['id']
  planet = db_query("select * from planets where id = $1;",[planet_id]).first

  erb(:page_of_planets, locals: {
    planet: planet
  })
end

get '/planets' do
  erb(:add_planet)  
end

post '/planets' do
  
  db_query(sql [
    params['name'],
    params['image_url'],
    params['diameter'], 
    params['mass'],
    params['moon_count']
  ])

  create_planet(params['name'], params['image_url'], params['diameter'], params['mass'], params['moon_count'])
  #data sent by the client will be automatically placed inside the params hash object
  redirect to '/submitted'
end

delete '/planets/:id' do
  delete_planet(params['id'])
  redirect '/'
end

get '/planets/:id/edit' do
  sql = "select * from planets where id = $1; "
  planet = db_query(sql, [params['id']]).first
  erb(:edit, locals: { planet: planet })
end

put '/planets/:id/update' do
  update_planet(
    params['name'],
    params['image_url'],
    params['diameter'], 
    params['mass'],
    params['moon_count']
  )

  redirect "/planets/#{params['id']}"
end