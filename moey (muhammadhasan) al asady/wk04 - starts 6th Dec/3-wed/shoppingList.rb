# shopping list tracker

# write a command line interface program for tracking your shopping list. 

# Running the shopping list tracker program users will be greeted with the main menu with 3 options.

# ```
# main menu
# =========
# 1) add new item
# 2) list all items
# 3) quit


main_menu = puts "main menu
=========
1) add new item
2) list all items
3) quit"
userinput = gets.chomp
all_lists = []

loop do
    if userinput == "1"
        puts "New item"
        new_item = gets.chomp
        all_lists.push(new_item)
        return main_menu
        elsif userinput == "2"
        return all_lists
        elsif userinput == "3"
        break
    end



end

# i need help fixing this

# enter an option: 
# ```

# - typing 1 as an option will prompt the user for a new item.
# - after the user finish entering a new item show the main menu again

# ```
# enter item name: milk
# ```

# - typing in option 2 will list all items and then show the main menu again

# ```
# you have the following items in your shopping list:
# nutella, flour, butter, bread, milk
# ```

# - entering 3 quits the program


