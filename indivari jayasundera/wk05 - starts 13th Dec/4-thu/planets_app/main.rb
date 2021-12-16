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



get '/planets/:id' do 
  planet_id = params["id"]
  conn = PG.connect( dbname: 'planets_app' )
  sql = "select * from planets where id = #{planet_id};"
  result= conn.exec(sql) # pg will always return an array
  planet = result[0] 
  conn.close 
  
  erb(:show, locals: {planet:planet})
  

end

get '/add_a_planet' do 
  

  erb(:new_planet)
end

post '/input_new_planet' do 
  sql = "insert into planets (name, image_url,diameter,mass,moon_count) values('#{params['name']}','#{params['image_url']}','#{params['diameter']}','#{params['mass']}','#{params['moons']}')"


  conn = PG.connect( dbname: 'planets_app' )
  conn.exec(sql)
  conn.close

  redirect "/" 

end



