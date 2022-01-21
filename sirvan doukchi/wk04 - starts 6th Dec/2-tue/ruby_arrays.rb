

# days_of_the_week = ["Sunday" ,'Monday' ,'Tuesday' ,'Wednesday', 'Thursday', 'Friday' ,'Saturday']
# first_item = days_of_the_week.shift()
# days_of_the_week.push(first_item)
# puts days_of_the_week

#creating a new array with 2 inner arrays
days_array = [['Monday','Tuesday','Wednesday','Thursday','Friday'],['Saturday','Sunday']] 
# puts days_array

days_array.pop #remove weekend days array
# puts days_array

#sorting alphabetically - .sort does ascending sort by default
sorted_array = days_array[0].sort #_by { |days_array| days_array }

# puts sorted_array

planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]

planeteers[1] # Access the second value in planeteers.

planeteers.push("Heart") #Add "Heart" to the end of planeteers.

#Combine planeteers with rangers = ["Red", "Blue", "Pink", "Yellow", "Black"] and save the result in a variable called heroes.
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]
heroes = planeteers + rangers

heroes.sort #Alphabetize the contents of heroes using a method.not sure if it's sufficient

heroes.shuffle #Randomize the contents of heroes using a method.

heroes.sample #Select a random element from heroes using a method.

 heroes.each {|hero| puts "#{hero} \n"} #display each hero in a new line on the terminal using the .each method

#display each hero in a new line on the terminal using the .each method only if the hero starts with the letter 'W'
 heroes.each {|hero|
if hero[0].smallcase == 'W'
    puts "#{hero} \n"
end
}






