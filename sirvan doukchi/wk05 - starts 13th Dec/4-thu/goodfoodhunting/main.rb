     
require 'sinatra'
require 'sinatra/reloader'
require 'pg' #need functions to talk to the db

get '/' do
  
  # we need to grab stuff from the db

  conn = PG.connect(dbname: 'goodfoodhunting')

  result = conn.exec("select * from dishes;")

  conn.close

  erb(:index, locals: {
    dishes: result
  })
end

get '/dishes/:id' do
  dish_id = params['id']
  conn = PG.connect(dbname: 'goodfoodhunting')
  sql = "select * from dishes where id = #{dish_id};"

  result = conn.exec(sql) # pg will always return an array , in this case an array of single hash for id
  dish = result[0] # {}
  # dish_name = dish["name"]
  conn.close
  

  erb(:show, locals: {
    dish: dish
    
  })
end

get '/share_a_dish' do


end

get '/input_dish_data' do

 #anything data sent by the client will
 #automatically be placed inside the params
 
#  params["name"]

sql = "insert into dishes (name, image_url) values ('#{params['name']}','#{params['image_url']}');"
conn = PG.connect(dbname: 'goodfoodhunting')
conn.exec(sql)
conn.close

# redirect '/' # always get- this is a get '/'
  
erb(:new)

  
end








get '/add_dish' do

  erb(:new) 
  
end



# route is not just the path
# it's the http method + path

# so instead we should use post method


# http methods - get - doing a read
# http method - post - doing a write


