     
require 'sinatra'
require 'sinatra/reloader'
require 'pg'

get '/' do

  conn = PG.connect(dbname: 'planets_app')

  sql = 'select * from planets;'

  result = conn.exec(sql)

  conn.close

  erb :index, locals: {
    planets: result
  }
end


get '/planets/:id' do
  planet_id = params['id']

  conn = PG.connect(dbname: 'planets_app')

  sql = "select * from planets where id = #{planet_id};"

  result = conn.exec(sql)

  conn.close

  erb :details, locals: {
    planet: result
  }
  # return planet_id

end

get '/add_a_planet' do
  erb(:new)
end

post '/submit_planet' do
  name = params['name']
  image_url = params['image_url']
  diameter = params['diameter']
  mass = params['mass']
  moon_count = params['moon_count']

  conn = PG.connect(dbname: 'planets_app')

  sql = "insert into planets(name, image_url, diameter, mass, moon_count) values('#{name}', '#{image_url}', '#{diameter}', '#{mass}', '#{moon_count}');"

  result = conn.exec(sql) 

  conn.close

  redirect "/"

end




