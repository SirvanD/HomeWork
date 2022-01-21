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


shoppingList = Array.new

loop do
    mainMenu =  
    "\nmain menu
=========
1) add new item
2) list all items
3) quit
select one option from above"
    
    puts(mainMenu)
    usrInput = gets().chomp.to_i

    if usrInput == 1
        print "********\nenter item names (using space to seperate multiple items): "
        shoppingList = shoppingList.concat(gets().chomp.split(' '))

    elsif usrInput == 2
        puts "********\nYou have listed:\n\n"
        shoppingList.each {|item| print item, "\n"}
        # f=File.new("ShoppingList.txt","w+")
        # f.puts(shoppingList)
        # f.close
    elsif usrInput == 3
        puts "********\nbye-bye"
        break
    end
end

