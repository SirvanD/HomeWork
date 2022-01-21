def main_menu 
    puts "
main menu
=========
1) add new item
2) list all items
3) quit 

enter an option:"
end
main_menu
shopping_list = []

loop do |input_number|
    display_list = ""
    input_number = gets.chomp.to_i()
    puts input_number
    if input_number == 1
        print "enter item name: " 
        item_name = gets.chomp.to_s()
        shopping_list.push(item_name)
    elsif input_number == 2
        puts "you have the following items in your shopping list:"
        shopping_list.each do |item|
            display_list+= "#{item}, "
        end
        puts display_list
    elsif input_number == 3
        break
    else 
        puts "enter an option from 1-3"
    end
    main_menu
end


