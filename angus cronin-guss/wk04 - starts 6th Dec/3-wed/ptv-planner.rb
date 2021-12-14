require 'pry'

alamein = ["Flinders Street", "Richmond", "East Richmond","Burnley", "Hawthorn","Glenferrie"]
glen_waverly = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond"," Kooyong", "Tooronga"]
sandringham = ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]

possible_lines = {"1" => alamein, "2" => glen_waverly, "3" => sandringham}


puts "Please enter a starting postition"
start_destination = gets.chomp

puts "Now enter your desired destination"
final_destination = gets.chomp


puts "Origin: #{start_destination}"
puts "Destination: #{final_destination}"

if start_destination == 