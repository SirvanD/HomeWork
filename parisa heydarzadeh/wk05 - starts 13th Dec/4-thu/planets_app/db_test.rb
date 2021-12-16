require 'pg'
require 'pry'

conn = PG.connect(dbname: 'planets_app')
sql = "SELECT * FROM planets"
result = conn.exec(sql)

result.each do |planet|
    puts planet['name']
    puts "#{planet['id']} - #{planet['name']}"
end


conn.close 