# Name 3 ways to make a HTTP requests in a web browser.
# - address bar
# - link / anchor(a)
# - form

# how to access the query string sent to the server inside a route in a sinatra web application? (answer with words or code)
#params[""] is a key value to a http request, for an example:
#                 param[key]  param[value]   
#                         v    v  
#https://www.omdbapi.com/?s=jaws&apikey=6010dc57

# how can we pause a ruby program to inspect the variables? (answer with words or code)
#binding allows you to freeze the program at a certain point depending on where the binding line is, adding binding, pry will let you use pry once it pauses, also require pry if this is the case
#for an example:
#puts ("yes yes yes")
#require "pry"
#binding, pry

data = {
    town: {
      residents: ["Maurice", "Belle", "Gaston"],
      castle: {
        num_rooms: 47,
        residents: [
          {
            name: "Robby Benson",
            year_of_birth: 1956
          }
        ],
        guests: ['birds']
      }
    }
  }

# print data[:town][:castle][:num_rooms]

# data[:town][:castle][:guests].unshift("Belle")
# print data[:town][:castle][:guests]

# print data[:town][:castle][:residents][0][:year_of_birth]

# data[:town][:castle][:cook] = "Mr Potts"
# print data[:town][:castle][:cook]

lost_boys = [
    {name: 'Tootles', age: '11'},
    {name: 'Nibs', age: '9'},
    {name: 'Slightly', age: '10'},
    {name: 'Curly', age: '8'},
    {name: 'The Twins', age: '9'}
  ]

# sum = 0
# lost_boys.each do |boy|
#     sum = sum + boy[:age].to_i
# end
# p sum


resident = {
    name: "Belle",
    friends: [
      {
        name: "Chip Potts",
        personality: "adventurous"
      },
      {
        name: "Cogsworth",
        personality: "serious"
      },
      {
        name: "Lumière",
        personality: "charsmatic"
    
      },
      {
        name: "Mrs. Potts",
        personality: "intelligent"
      }
    ]
  }

# p resident[:name]
# p resident[:friends][0][:name]

# i = 0
# while i < resident[:friends].length 
#     puts "#{resident[:name]} is friends with #{resident[:friends][i][:name]}" 
#     i+=1
# end

def letter_reverse(sentence) 
    sentenceSplit = sentence.split
    i = 0
    reversed = []
    while i < sentenceSplit.length
        reversed.push(sentenceSplit[i].reverse)
        i+=1
    end

    puts reversed.join(" ")
end

letter_reverse("Now I know what a TV dinner feels like")
letter_reverse("Put Hans back on the line")

# def scream(num)
#     str = ""
#     i = 1
#     if num === 0
#         p "crickets"
#     else
#         str += "lol"
#         while i < num
#             if num > 1
#                 str += "ol"

#             end
#             i+=1
#         end
#         p str
#     end

# end

# scream(10)