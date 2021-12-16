require 'sinatra'
require 'pg'
require 'sinatra/reloader'

get '/' do
  conn = PG.connect(dbname: 'planets_app')
  sql = "SELECT * FROM planets;"
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
  redirect"/"
end 