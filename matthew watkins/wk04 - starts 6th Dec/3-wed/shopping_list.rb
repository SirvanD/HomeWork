#add list 
#every time 1 is pressed 
#3 should quit the program


shopping_list = ["nutella", "flour", "butter", "bread", "milk"]

loop do
    puts"
    main menu
    =====
    1) add new item
    2) list all items
    3) quit
    enter an option:
    "
    
    input = gets().chomp().to_i()
    input
    if input == 1
        #prompt user for input
        puts "add item to shopping list:"
        new_item = gets().chomp()
        #push new item into the array
        shopping_list.push(new_item)
    elsif input == 2
        #list all items then return to main menu
        puts "you have the following items in your shopping list: #{shopping_list.join("" ",")}"
    elsif input == 3
        break
    end
end

# require "pry"
# binding.pry

# loop do 
#     puts ("say something to Daniel")
#     talk = gets.strip.chomp #strip strips all empty space from inputthe OUTER parts of the input #gets is a prompt

#     if talk[-1] == "?"
#         puts 'Sure'
#     elsif talk == ""
#         puts 'Fine. Be that way'
#     elsif talk == talk.upcase
#         puts 'Whoa, chill out'
#     else 
#         puts 'Whatever'
#     end 
# end