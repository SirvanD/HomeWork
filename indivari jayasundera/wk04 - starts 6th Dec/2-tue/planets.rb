planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]

#accessing the second value
planeteers[1]

## add heat to the end
planeteers.push("heart")

# combine planeteers with ranges
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]

heroes = planeteers.concat(rangers)

#Alphabetize 
heroes.sort

#randomize
heroes.shuffle

#select a random item
index=rand(0..heroes.length)
heroes[index]

#display each hero
puts("All hereoes")
heroes.each  do|hero|
    puts hero
end

#heroes starting with W
puts("Heroes with W")
heroes.each  do|hero|
    if hero.start_with? 'W'
    puts hero
    end
end