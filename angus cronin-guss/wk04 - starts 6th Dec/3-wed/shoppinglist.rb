def shopping_app()
    puts "Main menu"
    puts "======"
    puts "1)Add new item"
    puts "2)List all items"
    puts "3)Quit"

    puts "Enter an option"
    
end
shopping_app()
listener = gets.chomp.to_i
shopping_list = []
while 
    if listener == 1
        puts "What would you like to add?"
        new_item = gets.chomp
        shopping_list.push(new_item)
        shopping_app()
        listener = gets.chomp.to_i
    elsif
        listener == 2
        puts "You have the following items in your shopping list:" 
        puts shopping_list
        shopping_app()
        listener = gets.chomp.to_i
    elsif listener == 3
        break
    end 
end

# def add_item_to_array
#     shopping_list.push(new_item)
