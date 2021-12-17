     
require 'sinatra'
require 'sinatra/reloader'
require 'pg'

get '/' do
  conn = PG.connect(dbname: 'planets_app')
  sql = "select * from planets;"
  planets = conn.exec(sql)
  conn.close
  erb :index, locals: {
    planets: planets
  }
end

get '/planets/:id' do
  planet_id = params['id']
  conn = PG.connect(dbname: 'planets_app')
  sql = "select * from planets where id = #{planet_id};"
  planet = conn.exec(sql)[0]
  conn.close

  erb :show, locals: {
    planet: planet
  }
end

get '/add_planet' do

  erb :add_planet
end

post '/input_planet_data' do
  sql = "insert into planets (name, image_url, diameter, mass, moon_count) values ('#{params["name"]}', '#{params["image_url"]}', '#{params["diameter"]}', '#{params["mass"]}', '#{params["moon_count"]}');"
  conn = PG.connect(dbname: 'planets_app')
  conn.exec(sql)
  conn.close

  redirect "/"

end

delete '/delete_data' do
  sql = "delete from planets where id = #{params['planet_id']};"
  conn = PG.connect(dbname: 'planets_app')
  conn.exec(sql)
  conn.close

  redirect "/"
end

get '/edit_data/:id' do
  sql = "select * from planets where id = #{params['id']};"
  conn = PG.connect(dbname: 'planets_app')
  planet = conn.exec(sql)[0]
  conn.close

  erb :edit, locals: {
    planet: planet
  }
end

put '/update_planet_data/:id' do
  sql = "update planets set name = '#{params['name']}', image_url = '#{params['image_url']}', diameter = '#{params['diameter']}', mass = '#{params['mass']}', moon_count = '#{params['moon_count']}' where id = #{params['id']};"
  conn = PG.connect(dbname: 'planets_app')
  planet = conn.exec(sql)
  conn.close

  redirect "/planets/#{params['id']}"


end

