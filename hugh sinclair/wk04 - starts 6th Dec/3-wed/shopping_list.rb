# # shopping list tracker

# write a command line interface program for tracking your shopping list. 

# Running the shopping list tracker program users will be greeted with the main menu with 3 options.


# main menu
# =========
# 1) add new item
# 2) list all items
# 3) quit

# enter an option: 


# - typing 1 as an option will prompt the user for a new item.
# - after the user finish entering a new item show the main menu again


# enter item name: milk


# - typing in option 2 will list all items and then show the main menu again


# you have the following items in your shopping list:
# nutella, flour, butter, bread, milk


# - entering 3 quits the program

# > note: for this exercise you do not need to save the list permanently in your hard disk. 


shopping_list = []
loop do 
    puts "main menu"
    puts "========="
    puts "1) add new item"
    puts "2) list all items"
    puts "3) quit"
    print 'enter an option: ' 
    user_option_selected = gets.chomp.strip


    if user_option_selected == "1"
        puts "what would you like to add"
        user_wants = gets.chomp.strip
        shopping_list.push(user_wants)
        puts "#{user_wants} added!"
        puts "\n\n"
    elsif user_option_selected == "2"
        puts "Your list is: "
        puts shopping_list.join("\n")
        puts "\n\n"
    elsif user_option_selected == "3"
        exit
    else 
        puts "please enter a number corrosponding to an option"
    end
end

# LOOK UP FILEUTILS TO ADD TO THE LIST ALREADY CREATED



