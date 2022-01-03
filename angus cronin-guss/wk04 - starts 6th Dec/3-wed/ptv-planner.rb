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

# if start & finish are on the same train line

if glen_waverly.include?(start_destination) && alamein.include?(final_destination)
    
else 
    star

#     puts "You do not need to change lines"
end









# if sandringham.include?(start_destination) && alamein.include?(final_destination)
#     puts "You do not need to change lines"
# end

# definitions 
