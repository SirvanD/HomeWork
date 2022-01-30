# we are creating a dummy user and have a function to digest the password and put into the db
# add a dummy user to our app
# 
require 'pg'
require 'bcrypt'
require_relative 'user.rb'

# puts "creating dummy user..."
# hard code the email and password
email = "dt1@ga.co"

password = "pudding"


# connect to db
create_user(params['email'], params['password_digest'])
db_query("insert into users (email, password_digest) values ()
conn = PG.connect(dbname: 'goodfoodhunting')
password_digest = BCrypt::Password.create(password)
sql = "insert into users (email, password_digest) values ('#{email}', '#{password_digest}');"
# exec an insert statement to create a new user
conn.exec(sql)
conn.close

puts "done!"