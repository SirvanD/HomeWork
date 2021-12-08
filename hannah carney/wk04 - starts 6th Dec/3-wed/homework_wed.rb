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



# if gets == 2 # list current items in shopping list
#     if gets == 3 #end 
        
        
shopping_list = ['flour', 'butter', 'bread']

loop do 
    puts "main menu\n ======== \n 1) add new item \n 2) list all items \n 3) quit \n \n enter an option:"
    input = gets().chomp
            if input == "1" # add a new item to your shopping list 
                print "add a new item to your shopping list: "
                    shopping_list.push(input)
                end 

            if input == "2" # show current items in shopping list
                puts "The current items in your shopping list are " + shopping_list.join("\n")
            end

            if input == "3" # end the program
            break
    end
end


# loop through the options as per the input from the user 