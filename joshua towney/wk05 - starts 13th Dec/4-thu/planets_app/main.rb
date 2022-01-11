require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'

get '/' do
  erb :index
end

get '/planets' do

  conn = PG.connect(dbname: 'planets_app')
  sql = 'SELECT * FROM planets ORDER by id;'
  result = conn.exec(sql)
  conn.close

  erb :all_planets, locals: {
    planet: result
  }
end

get '/planets/new' do

  erb(:add_new_planet)

end

post '/planets' do

  sql = "INSERT INTO planets (name, image_url, diameter, mass, moon_count) VALUES ('#{params['name']}', '#{params['img_url']}', '#{params['diameter']}', '#{params['mass']}', '#{params['moon_count']}');"

  conn = PG.connect(dbname: 'planets_app')
  conn.exec(sql)
  conn.close


  redirect '/'

end

get '/planets/:id' do
  planet_id = params['id']

  conn = PG.connect(dbname: 'planets_app')
  sql = "SELECT * FROM planets WHERE name = '#{planet_id}';"
  result = conn.exec(sql)

  planet = result[0]

  conn.close
  
  erb(:planet_details, locals:{
    planet:planet
  })
end

get 'planets/:id/edit' do
  
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

put '/planets/:id' do

  sql = "UPDATE planets SET name = '#{params['name']}', image_url = '#{params['image_url']}', diameter = '#{params['diameter']}', mass = '#{params['mass']}', moon_count = '#{params['moon_count']}' WHERE id = '#{params['id']}';"

  # return sql

  conn = PG.connect(dbname: 'planets_app')
  conn.exec(sql)
  conn.close
  redirect '/'

end

delete '/planets/:id' do

  sql = "DELETE FROM planets WHERE id = #{params['id']}"

  conn = PG.connect(dbname: 'planets_app')
  conn.exec(sql)
  conn.close

  redirect '/'
  # return sql

end

# get /               planet home?

# get /planet/:id     individual planets

# get /planet/new     crete new planet form
# post /planet        finalizes creation and goes back to route where planets are all listed

# get /planet/:id/edit     edit planet by id
# put /planet/:id          puts edited data into main page

# delete /planet/:id       deletes planet





