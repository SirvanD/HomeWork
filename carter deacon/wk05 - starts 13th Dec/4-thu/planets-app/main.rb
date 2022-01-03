     
require 'sinatra'
require 'sinatra/reloader'
require 'pg'

get '/' do
  conn = PG.connect(dbname: 'planets_app')
  sql = "SELECT * FROM planets ORDER BY name;"
  planets = conn.exec(sql)
conn.close
  erb :index, locals: {planets: planets}
end

get '/planets/:id' do
  planet_id = params['id']
  conn = PG.connect(dbname: 'planets_app')
  sql = "SELECT * FROM planets WHERE id = #{planet_id};"
  result = conn.exec(sql)
  planet = result[0]
  conn.close
  erb :show_planet, locals: {planet: planet}
end

get '/name_planet' do
  erb :name_planet
end

post '/planet_submission' do
  name = params["name"]
  image_url = params["image_url"]
  diameter = params["diameter"]
  mass = params["mass"]
  moon_count = params["moon_count"]
  sql = "INSERT INTO planets (name, image_url, diameter, mass, moon_count) VALUES ('#{name}', '#{image_url}', '#{diameter}', '#{mass}', '#{moon_count}');"
  conn = PG.connect(dbname: 'planets_app')
  conn.exec(sql)
  conn.close
  redirect '/'
end

delete '/delete_planet' do
  sql = "DELETE FROM planets WHERE id = #{params['planet_id']};"
  conn = PG.connect(dbname: 'planets_app')
  conn.exec(sql)
  conn.close
  redirect '/'
end

get '/edit_planet/:id' do
  sql = "SELECT * FROM planets WHERE id = #{params['id']}"
  conn = PG.connect(dbname: 'planets_app')
  result = conn.exec(sql)
  planet = result[0]
  conn.close
  erb :edit_planet, locals: {planet: planet}
end

put '/update_planet/:id' do
  sql = "UPDATE planets SET name = '#{params['name']}', image_url = '#{params['image_url']}', diameter = #{params['diameter']}, mass = #{params['mass']}, moon_count = #{params['moon_count']} WHERE id = #{params['id']};"
  conn = PG.connect(dbname: 'planets_app')
  # return sql
  conn.exec(sql)
  conn.close
  redirect "/planets/#{params['id']}"
end