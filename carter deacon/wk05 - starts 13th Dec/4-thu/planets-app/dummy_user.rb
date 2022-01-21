require 'pg'
require 'pry'
require 'bcrypt'

puts "Creating dummy user..."

email = "planets@planets.com"
password = "planets"

conn = PG.connect(dbname: 'planets_app')

password_digest = BCrypt::Password.create(password)

sql = "INSERT INTO users (email, password_digest) VALUES ('#{email}', '#{password_digest}');"

conn.exec(sql)
conn.close

puts "Done!"