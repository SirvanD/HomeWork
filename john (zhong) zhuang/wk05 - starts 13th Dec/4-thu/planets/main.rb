require 'sinatra'
require 'sinatra/reloader'
require 'pg'

get '/' do
conn = PG.connect(dbname: 'planets_app')
  planets = conn.exec("SELECT * FROM planets;")
conn.close

  erb(:index, locals: {
    planets: planets
  })
end

get '/planets/:id' do
planet_id = params["id"]
conn = PG.connect(dbname: 'planets_app')
  planets = conn.exec("SELECT * FROM planets where id=#{planet_id};")
  planet = planets[0]
conn.close

erb(:planet_detail, locals: {
  planet: planet
})
end


get '/user_input' do


  erb(:new)
end

post '/upload' do
  params.to_s
  conn = PG.connect(dbname: 'planets_app')
  conn.exec("INSERT INTO planets (name, image_url, diameter, mass, moon_count) VALUES ('#{params['name']}','#{params['image_url']}', '#{params['diameter']}', '#{params['mass']}', '#{params['moon_count']}');")
  conn.close

end