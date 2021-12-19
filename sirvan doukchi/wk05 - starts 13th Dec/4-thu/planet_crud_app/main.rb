     
require 'sinatra'
require 'sinatra/reloader'
require 'pg'


get '/' do

  conn = PG.connect(dbname:'planets_app')

  result = conn.exec("SELECT * FROM planets;")

  conn.close

  
  
  erb(:index, locals: {
     planets: result
  })
end

get '/add_new_planet' do

  

  erb(:add_new_planet)

end

post '/insert_planet_data' do

  sql = "INSERT INTO planets (name,image_url,diameter,mass,moon_count)values('#{params['name']}','#{params['image_url']}',#{params['diameter']},#{params['mass']},#{params['moon_count']});"

  
  conn = PG.connect(dbname: 'planets_app')
  conn.exec(sql)
  conn.close

  redirect '/'
  

  
end

=begin 

INSERT INTO planets(name,image_url,diameter,mass,moon_count) VALUES('Mercury', 'https://www.popsci.com/uploads/2019/01/07/RZODSOHKA6O4VMNPPUW7GUTUBE-1536x1536.jpg', 4879.4, 0.055, 0);


INSERT INTO planets(name,image_url,diameter,mass,moon_count) VALUES('Earth', 'https://www.popsci.com/uploads/2019/01/07/57LV7D7YHYJ2BDWMUKBC3J5WG4-1536x1536.jpg', 12742.5, 0.074, 1);


INSERT INTO planets(name,image_url,diameter,mass,moon_count) VALUES('Mars', 'https://www.popsci.com/uploads/2019/01/07/XYNJU7VV7ISTJ4HJLUR5ERUZOE.jpg', 6779, 0.107, 2);


=end




