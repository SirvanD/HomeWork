require 'pry'

arrows = "---->"

alamein = ["Flinders Street", "Richmond", "East Richmond","Burnley", "Hawthorn","Glenferrie"]
glen_waverly = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond"," Kooyong", "Tooronga"]
sandringham = ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]


puts "Please enter a starting postition"
start_destination = gets.chomp

puts "Now enter your desired destination"
final_destination = gets.chomp


puts "Origin: #{start_destination}"
puts "Destination: #{final_destination}"


# definitions




# if start & finish are on the same train line

if glen_waverly.include?(start_destination) && glen_waverly.include?(final_destination)    
starting_line = glen_waverly
ending_line = glen_waverly

end
if alamein.include?(start_destination) && alamein.include?(final_destination)  
    starting_line = alamein
    ending_line = alamein
end
if sandringham.include?(start_destination) && sandringham.include?(final_destination)  
    starting_line = sandringham
    ending_line = sandringham
end

# different lines

    





# if sandringham.include?(start_destination) && alamein.include?(final_destination)
#     puts "You do not need to change lines"
# end

# definitions 
