# 1. Name 3 ways to make a HTTP requests in a web browser.
    # Forms, Address / Search bar, Links

# 2. How to access the query string sent to the server inside a route in a sinatra web application? 
    # Params
    # If title shows for t=Jaws you'd look for "t" example:
    # title = params['t']

# 3. How can we pause a ruby program to inspect the variables?
    # require 'pry' (at top)
    # binding.pry (at pause line)

# 4. Assume the following hash...
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

    # print the number of rooms in the castle by accessing the hash
    p data[:town][:castle][:num_rooms]

    # Add "Belle" to the beginning of the guests array
    data[:town][:castle][:guests].unshift "Belle"
    p data[:town][:castle][:guests]

    # print the year of birth for robby by accessing the hash
    p data[:town][:castle][:residents][0][:year_of_birth]

    # Add a new key and value pair to the castle hash (key :cook value "Mrs Potts")
    data[:town][:castle].store(:cook, "Mrs Potts")

    # To show all
    p data[:town]

# 5. Assume the following array of hashes:
lost_boys = [
  {name: 'Tootles', age: '11'},
  {name: 'Nibs', age: '9'},
  {name: 'Slightly', age: '10'},
  {name: 'Curly', age: '8'},
  {name: 'The Twins', age: '9'}
]

    # Use .each to iterate over the lost_boys array to calculate to the sum of all lost boys age. print the sum age in the terminal

    total_age = 0
    lost_boys.each do |boy|
        total_age = total_age + boy[:age].to_i
    end
    p total_age

# 6. Assume you have the following hash...
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

    friendsArray = resident[:friends]
    i = 0
    while i < friendsArray.length do
        puts "#{resident[:name]} is friends with #{friendsArray[i][:name]}"
        i += 1
    end

# 7. Write a function letter_reverse that accepts a single argument, a string. The function should maintain the order of words in the string but reverse the letters in each word. Don't worry about punctuation.
    # letter_reverse("Now I know what a TV dinner feels like")
    # => "woN I wonk tahw a VT rennid sleef ekil"
    # letter_reverse("Put Hans back on the line")
    # => "tuP snaH kcab no eht enil"

    def letter_reverse (string)
        stringArray = string.split
        reversedWords = []
        stringArray.each do |word|
            reversedWords.push(word.reverse)
        end
        p reversedWords.join(' ')
    end
    
    letter_reverse("Now I know what a TV dinner feels like")
    letter_reverse("Put Hans back on the line")

# 8. Define a scream method that accepts a single parameter and when called should as return a string as per the examples below"

    def scream (num)
        string = "lol"
        if num == 0
            p "crickets"
        elsif num == 1
            p string
        else
            i = 1
            while i < num do
                string = string + "ol"
                i += 1
            end
            p string
        end
    end 

    scream(0)
    scream(1)
    scream(2)
    scream(3) 
    scream(4)
    scream(5) 
    scream(7) 
    scream(10)