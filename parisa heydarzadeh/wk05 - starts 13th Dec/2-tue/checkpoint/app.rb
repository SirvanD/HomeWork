def scream (num_input)
    counter = 0
    str_array = []
    if num_input == 0
      str_array.push("cricket")
      return str_array.join(" ")
    elsif num_input == 1
     str_array.push("lol")
    elsif num_input > 1
        str_array.push("l")   
      while counter < num_input
      str_array.push("ol")
      counter = counter + 1;
      end
         
    end
    return str_array.join('');
end
 
print scream(0)

# scream(0) #=> "crickets"
# scream(1) #=> "lol"
# scream(2) #=> "lolol"
# scream(3) #=> "lololol"
# scream(4) #=> "lolololol"
# scream(5) #=> "lololololol"
# scream(7) #=> "lololololololol"
# scream(10) #=> "lolololololololololol"