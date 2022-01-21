require 'sinatra'
require 'sinatra/reloader'
require 'pg'

get '/' do
  conn = PG.connect( dbname: 'planets_app' )
  sql = "select * from planets;"
  result = conn.exec(sql)
  conn.close
  
  erb :index, locals: {result: result}
end


# show one planet
get '/planets/:id' do 
  planet_id = params["id"]
  conn = PG.connect( dbname: 'planets_app' )
  sql = "select * from planets where id = #{planet_id};"
  result= conn.exec(sql) # pg will always return an array
  planet = result[0] 
  conn.close 
  
  erb(:show, locals: {planet:planet})
  

end

# create new planet
get '/planets/new' do 
  

  erb(:new_planet)
end

# insert new planet
post '/planets' do 
  sql = "insert into planets (name, image_url,diameter,mass,moon_count) values('#{params['name']}','#{params['image_url']}','#{params['diameter']}','#{params['mass']}','#{params['moons']}')"


  conn = PG.connect( dbname: 'planets_app' )
  conn.exec(sql)
  conn.close

  redirect "/" 

end

# delete one planet
delete '/planets/:id' do 
  sql = "delete from planets where id = #{params['planet_id']};"
  conn = PG.connect( dbname: 'planets_app' )
  conn.exec(sql)
  conn.close
  redirect '/'
end

# retrieve a planet for editing
get '/planets/:id/edit' do 
  sql ="select * from planets where id = #{params['id']};"
  conn = PG.connect( dbname: 'planets_app' )
  result = conn.exec(sql)
  conn.close
  planet = result[0]
  erb(:edit_planet, locals: {
    planet:planet
  })
end

# update planets
post '/planets/:id' do 
  sql ="update planets set name = '#{params['name']}', image_url = '#{params['image_url']}', diameter = '#{params['diameter']}',mass = '#{params['mass']}', moon_count ='#{params['moons']}'where id = '#{params['id']}';"

 conn = PG.connect( dbname: 'planets_app' )
 conn.exec(sql)
 conn.close
 redirect "/planets/#{params['id']}"
end
