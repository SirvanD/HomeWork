require 'sinatra'
require 'sinatra/reloader'
require 'pg' # need functions to call db

get '/' do
  # we need to grab stuff from db

  conn = PG.connect(dbname: 'planets')
  sql = 'select * from planets order by name;'
  result = conn.exec(sql)
  # puts result.to_a
  conn.close 

  erb :index, locals: {planets: result}
end


get '/planets/:id'  do
  planet = params['id']

  conn = PG.connect(dbname: 'planets')

  sql = "select * from planets where id = #{planet};"

  result = conn.exec(sql) #pf will always return array
  # return sql

  planet = result[0]
  conn.close
  erb(:show, locals:
  {planet: planet} )
end 

get '/new' do
   erb(:new)
end


post '/enter_a_planet' do 
  #any data sent by the client will
  #auto be placed in params

  sql = "INSERT INTO planets (name,image_url,diameter,mass,moon_count)values('#{params['name']}','#{params['image_url']}',#{params['diameter']},#{params['mass']},#{params['moon_count']});"

  
  conn = PG.connect(dbname: 'planets')
  conn.exec(sql)
  conn.close

  redirect '/'

    # "Inputting dish data"
end

# delete '/delete_data/:dish_id' do

#   sql = "delete from dishes where id = #{params['dish_id']}; "

#   conn = PG.connect(dbname: 'planets')
#   conn.exec(sql)
#   conn.close

#   redirect '/'

# end

# get 'edit_data/:id' do 
#   sql = "select * from dishes where id = #{params['id']};"

#   conn = PG.connect(dbname: 'planets')
#   conn.exec(sql)
#   conn.close

#   dish =result[0]

#   erb(:edit, locals: {dish: dish})

# end

# put '/update_data/:id' do 

#   sql = "update dishes set name = '#{params['name']}', image_url = '#{params[image_url]}' where; id = #{params['id']};"


#   conn = PG.connect(dbname: 'planets')
#   conn.exec(sql)
#   conn.close

#   redirect "/dishes/#{params['id']}"

# end


# a route is not just the path 
# its the http + method 


#crud apps
#create
#read
#update 
#destroy

#4 main ways ops of database
#crud 
#insert 
#select   
#delete
#update

