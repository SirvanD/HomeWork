require 'sinatra'
require 'sinatra/reloader'
require 'pg'

get '/' do

  conn = PG.connect(dbname: 'planets_app')
  sql = 'SELECT * FROM planets ORDER by id;'
  result = conn.exec(sql)
  conn.close

  erb :index, locals: {
    planet: result
  }
end

get '/add_new_planet' do

  erb(:add_new_planet)

end

post '/add_new_planet' do

  sql = "INSERT INTO planets (name, image_url, diameter, mass, moon_count) VALUES ('#{params['name']}', '#{params['img_url']}', '#{params['diameter']}', '#{params['mass']}', '#{params['moon_count']}');"

  conn = PG.connect(dbname: 'planets_app')
  conn.exec(sql)
  conn.close


  redirect '/'

end

get '/planet_details/:planet_name' do
  planet_id = params["planet_name"]

  conn = PG.connect(dbname: 'planets_app')
  sql = "SELECT * FROM planets WHERE name = '#{planet_id}';"
  result = conn.exec(sql)

  planet = result[0]

  conn.close
  
  erb(:planet_details, locals:{
    planet:planet
  })
end

get '/edit/:planet_name' do
  
  planet_id = params["planet_name"]

  sql = "SELECT * FROM planets WHERE name = '#{planet_id}';"
  conn = PG.connect(dbname: 'planets_app')
  result = conn.exec(sql)
  conn.close

  planet = result[0]


  erb(:edit, locals: {
  planet: planet
})
end

put '/edit/:planet_name' do

  sql = "UPDATE planets SET name = '#{params['name']}', image_url = '#{params['image_url']}', diameter = '#{params['diameter']}', mass = '#{params['mass']}', moon_count = '#{params['moon_count']}' WHERE id = '#{params['id']}';"

  # return sql

  conn = PG.connect(dbname: 'planets_app')
  conn.exec(sql)
  conn.close
  redirect '/'

end

delete '/delete_planet' do

  sql = "DELETE FROM planets WHERE id = #{params['id']}"

  conn = PG.connect(dbname: 'planets_app')
  conn.exec(sql)
  conn.close

  redirect '/'
  # return sql

end

# get /planet

# get /planet/:id

# get /planet/new
# post /planet

# get /planet/:id/edit
# put /planet/:id

# delete /planet/:id





