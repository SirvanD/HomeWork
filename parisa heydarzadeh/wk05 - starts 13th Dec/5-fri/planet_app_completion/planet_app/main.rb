     
require 'sinatra'
require 'sinatra/reloader'
require 'pg'




get '/' do
  conn = PG.connect(dbname: 'planet_app')
  sql = "SELECT * FROM planets"
  result = conn.exec(sql)
  conn.close
  # erb always return a string
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
  erb(:showpage, locals: {
    planet: planet
  })
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

    redirect '/'
  end
  
  delete '/delete_data/:planet_id' do
    sql = "delete from planets where id = #{ params['planet_id'] }; "
    conn = PG.connect(dbname: 'planet_app')
    conn.exec(sql)
    conn.close 
    
    redirect "/"

end 

get '/edit_data/:id' do

  sql = "select * from planets where id = #{params['id']};"
   
  conn = PG.connect(dbname: 'planet_app')
  result = conn.exec(sql)
  conn.close 
  planet = result[0]
  
  erb(:edit, locals: {
    planet: planet
  })
  end


  put '/update_data/:id' do

    sql = "update planets set name = '#{params['name']}', image_url ='#{params['image_url']}', diameter='#{params['diameter']}', mass= '#{params['mass']}', moon_count='#{params['moon_count']}' where id = #{params['id']};"
  
    conn = PG.connect(dbname: 'planet_app')
    result = conn.exec(sql)
    conn.close
  
    redirect "/planet/#{params['id']}"
  
  end


  

