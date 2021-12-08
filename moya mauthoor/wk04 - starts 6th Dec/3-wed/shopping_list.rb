
@items = []

loop do 
    menu_options = ["Main menu", "======", "1) Add new item", "2) List all items", "3) Quit"]
    puts menu_options
    print "Enter an option: " 
    user_choice = gets.chomp.to_i

    if user_choice == 1
        print "Enter new item name: "
        item = gets.chomp.strip
        @items.push(item)
    elsif user_choice == 2
        puts "You have the following items in your shopping list: "
        puts @items.join(", ")
    elsif user_choice == 3
        #  The statement above could probably have just been an 'else' statement but I wanted to ensure quitting the program was only triggered by choosing option 3, rather than any kind of user input other than 1 or 2. 
        exit
    else
        puts "Please select from the following menu: "
    end
    puts "\n"
end