     
require 'sinatra'
require 'sinatra/reloader'
require 'pg'


get '/' do
  conn = PG.connect( dbname: 'planets_app' )
  sql =  "select * from planets;"
  planets = conn.exec(sql)
  
  
  planets.each do |planet| #this loop goes through the result above, finds the dish, displays the name
    puts planet['name']
  end
  
  conn.close

  erb :index, locals: {

    planets: planets
  }
end



get '/planets/:id' do
  planet_id = params['id']

  conn = PG.connect( dbname: 'planets_app' )
  sql =  "select * from planets where id = #{planet_id}; "

  results = conn.exec(sql) # pg will ALWAYS return an array, even if theres only one record 

  planet = results[0]
  conn.close

  erb(:page_of_planets, locals: {
    planet: planet
  })
end



get '/add_planet' do
  
erb(:add_planet)  
end



post '/planet_data' do
  conn = PG.connect( dbname: 'planets_app' )
  sql = "insert into planets (name, image_url, diameter, mass, moon_count) 
  values (
    '#{ params['name'] }',
    '#{ params['image_url'] }',
    '#{ params['diameter'] }',
    '#{ params['mass'] }',
    '#{ params['moon_count'] }');"
  conn.exec(sql)
  conn.close

  #data sent by the client will be automatically placed inside the params hash object
erb(:submitted)

end

delete '/delete_planet/:planet_id' do
  sql = "delete from planets where id = #{ params['planet_id'] };"
  conn = PG.connect(dbname: 'planets_app')
  conn.exec(sql)
  conn.close

  redirect '/'
end

get '/edit_data/:id' do

  sql = "select * from planets where id = #{params['id']};"

  conn = PG.connect(dbname: 'planets_app')
  result = conn.exec(sql)
  conn.close

  planet = result[0]
  erb(:edit, locals: { planet: planet })
end

put '/update_data/:id' do
  
  sql = "update planets set name = '#{params['name']}', image_url = '#{params['image_url']}' where id = #{params['id']};"

  conn = PG.connect(dbname: 'planets_app')
  conn.exec(sql)
  conn.close

  redirect "/planets/#{params['id']}"
end