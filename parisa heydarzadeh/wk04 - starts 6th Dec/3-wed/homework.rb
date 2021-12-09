# shopping list tracker
# write a command line interface program for tracking your shopping list.

# Running the shopping list tracker program users will be greeted with the main menu with 3 options.

# main menu
# =========
# 1) add new item
# 2) list all items
# 3) quit

# enter an option: 
# typing 1 as an option will prompt the user for a new item.
# after the user finish entering a new item show the main menu again
# enter item name: milk
# typing in option 2 will list all items and then show the main menu again
# you have the following items in your shopping list:
# nutella, flour, butter, bread, milk
# entering 3 quits the program
# note: for this exercise you do not need to save the list permanently in your hard disk.


require 'pry'

list_items = ["nutella", "flour", "butter", "bread", "milk"]


loop do

#   main_menu = {
#     :add new item,
#     :list all items,
#     :quit
# }

     puts "main_menu"
     print "enter an option"
     option_value = gets.chomp

     if option_value == '1'
        puts "add an item"
       list_item.push(gets.chomp)
       print "main_menu"

       elsif option_value == '2'
       puts "you have the following items in your shopping list",list_item
       else option_value == '3'
      break
    end
end



#binding.pry