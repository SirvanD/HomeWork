     
require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'bcrypt'
require_relative 'models/planet.rb'

enable :sessions


get '/' do
  planets = all_planets()
  erb(:index, locals: {
     planets: planets
  })
end


get '/planets/new' do
  erb(:new)
end


post '/planets' do
  create_planet(params['name'], params['image_url'], params['diameter'], params['mass'], params['moon_count'])

  redirect '/'
end


get '/planets/:id' do

  planet_id = params['id']

  planet = db_query("SELECT * FROM planets WHERE id = $1", [planet_id]).first

  erb(:show, locals: {planet: planet})

end

delete '/planets/:id' do

  delete_planet(params['id'])

  redirect '/'
end


get '/planets/:id/edit' do

  sql = "SELECT * FROM planets WHERE id = $1;"
  planet = db_query(sql, [params['id']]).first

  erb(:edit, locals: { planet: planet})
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









