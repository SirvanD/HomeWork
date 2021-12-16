require 'pg'
require 'pry'


conn = PG.connect(dbname: 'goodfoodhunting')

# prepare what to say
# prepare a message 
sql = "SELECT * FROM dishes;"

# lhs assignment
dishes = conn.exec(sql)
# result_arr = result.to_a
# p result_arr
# result is an array of hashes

# renaming result to dishes
dishes.each do |dish|

    puts dish['name']
end

conn.close #hang up the phone


# result_array = result.to_a
#  result_array.each |result_element|
#     names = 
#     p names


#pausing after we connected and requested for all dishes
# binding.pry 

# to_a converting to an array