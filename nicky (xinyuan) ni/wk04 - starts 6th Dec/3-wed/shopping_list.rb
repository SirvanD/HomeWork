list = []
loop do
    print "
    main menu
    =========
    1) add new item
    2) list all items
    3) quit
    
    enter an option: "

    input = gets.chomp.strip
   
    if input == "1"
        print "enter item name: " 
        item = gets.chomp.strip
        list = list.push(item)
    elsif input == "2" 
        puts("you have the following items in your shopping list:")
        print list
    elsif input == "3"
        break 
    else
        puts("-----Please enter 1 or 2 or 3-----")
    end

end

# sorry i don't know how to print the list without "" and []...