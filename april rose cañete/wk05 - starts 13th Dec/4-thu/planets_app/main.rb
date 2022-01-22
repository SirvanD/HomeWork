     
require 'sinatra'
require 'sinatra/reloader'
require 'pg'

require_relative 'models/planet.rb'

get '/' do

  result = all_planets()

  erb :index, locals: {
    planets: result
  }
end

get '/planets/new' do
  erb(:new)
end

get '/planets/:id' do
  planet_id = params['id']

  sql = "select * from planets where id = $1;"

  result = db_query(sql, [planet_id])

  erb :details, locals: {
    planet: result
  }
end

post '/planets' do
  result = add_planet(params['name'], params['image_url'], params['diameter'], params['mass'], params['moon_count'])

  redirect "/"
end

get '/planets/:id/edit' do
  sql = "select * from planets where id = $1;"

  result = db_query(sql, [params['id']])

  erb(:update, locals: {
    planet: result
  })
end

put '/planets/:id' do
  result = update_planet(params['name'], params['image_url'], params['diameter'], params['mass'], params['moon_count'], params['id'])

  redirect "/planets/#{params['id']}"
end

delete '/planets/:id' do
  result = delete_planet(params['id'])

  redirect "/"
end


# set to run program on a different port
set :port, 8080



