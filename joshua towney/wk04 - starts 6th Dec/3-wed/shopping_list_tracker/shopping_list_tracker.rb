list = []

loop do 

    main_menu = "main menu","=========","(1) add new item","(2) list all items","(3) quit"
    
    puts main_menu
    print "enter an option:"
    selection = gets.strip.chomp

    if selection == '1'
        puts "item to add"
        list.push(gets.strip.chomp)
    elsif selection == '2'
        puts "you have the following items in your shopping list:",list
    elsif selection == '3'
        break
    end
end

