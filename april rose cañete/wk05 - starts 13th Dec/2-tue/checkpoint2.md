
### Question 1

* through address bar
* through a form
* through a link

### Question 2

a query string can be access through the parameter set in the ruby program

e.g 
http request:
 http://localhost:4567/hello?name=april

ruby program:
```ruby
get '/hello' do
  name = params['name']
end
```

### Question 3

First add require 'pry' to the main rb file
then add binding.pry to where you want your program to pause.

### Question 4

```ruby
# print number of rooms
data[:town][:castle][:num_rooms]

# add 'Belle' to the start of the guests array
data[:town][:castle][:guests].unshift('Belle')

# print the year of birth for robby by accessing the hash
data[:town][:castle][:residents][0][:year_of_birth]

# Add a new key and value pair to the castle hash (key :cook value "Mrs Potts")
data[:town][:castle].store(:cook, "Mrs Potts")

```

### Question 5
```ruby
sum_of_ages = 0

lost_boys.each do |boy|

    age = boy[:age]

    sum_of_ages += age.to_i

end

puts sum_of_ages

```

### Question 6
```ruby
counter = 0

while counter < resident[:friends].size
    friend = resident[:friends][counter][:name]

    puts "Belle is friends with #{friend}"

    counter += 1
end


```

### Question 7
```ruby

def letter_reverse(str)
    
    str_split_to_arr = str.split(" ")
    rev_str = []

    str_split_to_arr.each do |word|
        new_str << word.reverse 
    end

    puts rev_str.join(" ")
end

```

### Question 8
```ruby
def scream(num)

    if num == 0 
        return "crickets"
    else 
        return "l" + ("ol" * num)
    end
end

```




