     
require 'sinatra'
require 'sinatra/reloader'
require 'pg'

get '/' do
  conn = PG.connect(dbname: 'planets_app')

  sql = 'SELECT * FROM planets;'
  result = conn.exec(sql)
  conn.close
    
  
    
  
  erb :index, locals: {
    planets: result
  }
end

get '/planets/:planet_id' do
  planet_id = params['planet_id']

  conn = PG.connect(dbname: 'planets_app')
  sql = "SELECT * FROM planets WHERE id = #{planet_id};"
  result = conn.exec(sql)
  planet = result[0]

  erb :show_planet, locals: {
    planet_id: planet['id'],
    planet_name: planet['name'],
    planet_image_url: planet['image_url'],
    planet_mass: planet['mass'],
    planet_diameter: planet['diameter'],
    planet_moon_count: planet['moon_count']
  }
end



get '/add_planet' do

  erb :add_planet
end

post '/submit_planet_data' do

  name = params['name']
  image_url = params['image_url']
  diameter = params['diameter']
  mass = params['mass']
  moon_count = params['moon_count']

  sql = "INSERT INTO planets (name, image_url, diameter, mass, moon_count) values ('#{name}', '#{image_url}', '#{diameter}', '#{mass}', '#{moon_count}')"

  conn = PG.connect(dbname: 'planets_app')
  conn.exec(sql)
  conn.close

  redirect '/'

end


delete '/delete_planet' do

  sql = "delete from planets where id = #{params['planet_id']};"

  conn = PG.connect(dbname: 'planets_app')
  conn.exec(sql)
  conn.close
  
  redirect '/'

end

get '/edit_planet/:id' do

  sql = "select * from planets where id = #{params['id']};"
  
  conn = PG.connect(dbname: 'planets_app')
  response = conn.exec(sql)
  conn.close

  planet = response[0]
  erb :edit_planet, locals: {
    planet: planet
  }

end

put '/update_planet/:id' do

  sql = "update planets set name = '#{params['name']}', image_url = '#{params['image_url']}', diameter = '#{params['diameter']}', mass = '#{params['mass']}', moon_count = '#{params['moon_count']}';"

  conn = PG.connect(dbname: 'planets_app')
  response = conn.exec(sql)
  conn.close

  redirect "/planets/#{params['id']}"

end




# Venus
# https://www.nasa.gov/sites/default/files/thumbnails/image/imagesvenus20191211venus20191211-16.jpeg
# 12103.6
# 4.8675
# 0