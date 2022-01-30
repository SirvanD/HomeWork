     
require 'sinatra'
require 'sinatra/reloader'
require 'pg'

get '/' do
  conn = PG.connect(dbname: 'planet_app')
  sql = "SELECT * FROM planets"
  result = conn.exec(sql)
  conn.close
  

  erb :index, locals: {
    planets: result
  }
end


get '/planet/:id' do
  planet_id = params['id']
  conn = PG.connect(dbname: 'planet_app')
  sql = "SELECT * FROM planets where id = #{planet_id}"
  result = conn.exec(sql)
  planet = result[0]
  conn.close
  
  erb(:showpage, locals: { planet: planet })
end


get '/input_planet_data' do
  

  erb(:input_planet_data)
end

post '/input_data' do
  sql ="insert into planets(name, image_url, diameter, mass, moon_count) values (
    '#{ params['name'] }',
    '#{ params['image_url'] }', 
    '#{ params['diameter'] }', 
    '#{ params['mass'] }', 
    '#{ params['moon_count'] }');"
    conn = PG.connect(dbname: 'planet_app')
    conn.exec(sql)
    conn.close

    redirect "/"
end