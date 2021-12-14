def scream (num_input)
    counter = 0
    str_array = []
    if num_input == 0
      str_array.push("crickets")
      return str_array
       elsif num_input == 1
        str_array.push("lol")
         else num_input > 1
            while counter < num_input
             str_array.push("ol")
             counter = counter + 1;
            end
          end
       end
    end
    return str_array.join('');
end
  
  
  
  