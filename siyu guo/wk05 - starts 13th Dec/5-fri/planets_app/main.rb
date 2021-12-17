require 'sinatra'
require 'pg'
require 'sinatra/reloader'

get '/' do
  conn = PG.connect(dbname: 'planets_app')
  sql = "SELECT * FROM planets order by name asc;"
  result = conn.exec(sql)
  conn.close
  erb(:index, locals: {
    planets: result
  })
end

get '/planets/:id' do
  planet_id = params['id']
  conn = PG.connect(dbname:'planets_app')
  sql = "SELECT * FROM planets WHERE id = #{planet_id}";
  result = conn.exec(sql)
  planet = result[0]
  "Planet Data for #{planet_id}"
  erb(:show, locals: { planet: planet })
end

get '/add_a_planet' do
  erb(:new)
end

post '/input_planet_data' do 
  sql = "INSERT INTO planets (name,image_url,diameter,mass,moon_count) VALUES ('#{params['name']}', '#{params['image_url']}', '#{params['diameter']}', '#{params['mass']}','#{params['moon_count']}');"
  conn = PG.connect(dbname:'planets_app')
  conn.exec(sql)
  conn.close
  redirect "/"
end 

get '/edit_data/:id' do
  sql = "SELECT * FROM planets WHERE id = #{params['id']};"
  conn = PG.connect(dbname: 'planets_app')
  result = conn.exec(sql)
  planet = result[0]
  conn.close 
  erb(:update, locals:{
    planet: planet
  })
end

put '/update_data/:id' do
  sql = "UPDATE planets set name = '#{params['name']}', image_url = '#{params['image_url']}', diameter = '#{params['diameter']}', mass = '#{params['mass']}', moon_count = '#{params['moon_count']}' WHERE id = '#{params['id']}';"
  conn = PG.connect(dbname: 'planets_app')
  conn.exec(sql)
  conn.close
  redirect "/planets/#{params['id']}"
end

delete "/delete_data/:id" do
  sql = "DELETE FROM planets WHERE id = #{params['id']};"
  conn = PG.connect(dbname:'planets_app')
  conn.exec(sql)
  conn.close
  redirect "/"
end