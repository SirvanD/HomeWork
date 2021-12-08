
    list_items = []
loop do
    puts "main menu"
    puts "========="
    puts "1) add new item"
    puts "2) list all items"
    puts "3) quit"
    puts ""
    print "enter an option: "
    input = gets.chomp
    if input == "1" 
        print "enter item name: "
        add_item = gets.chomp
        list_items.push(add_item)

    elsif input == "2"
        puts "you have the following items in your shopping list: "
        print list_items.join(", ")
        puts ""
    elsif input == "3"
        puts "goodbye"
        break
    end
end




# require "pry"
# binding.pry