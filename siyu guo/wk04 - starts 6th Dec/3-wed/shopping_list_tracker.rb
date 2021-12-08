# shopping list tracker
# write a command line interface program for tracking your shopping list.

# Running the shopping list tracker program users will be greeted with the main menu with 3 options.

# main menu
# =========
# 1) add new item
# 2) list all items
# 3) quit
shopping_list = ["nutella", "flour", "butter", "bread"]
loop do
main_menu = "main menu","=========","1) add new item","2) list all items","3) quit"
puts main_menu
print "enter an option number"
input = gets.chomp.to_i
    if input == 1
        puts "add a new item to the list"
        item = gets.chomp
        if item != ""
            shopping_list.push(item)
        end
    elsif input == 2
        puts shopping_list
    elsif input == 3
        break
    end
end
# enter an option: 
# typing 1 as an option will prompt the user for a new item.
# after the user finish entering a new item show the main menu again
# enter item name: milk
# typing in option 2 will list all items and then show the main menu again
# you have the following items in your shopping list:
# nutella, flour, butter, bread, milk
# entering 3 quits the program
# note: for this exercise you do not need to save the list permanently in your hard disk.
