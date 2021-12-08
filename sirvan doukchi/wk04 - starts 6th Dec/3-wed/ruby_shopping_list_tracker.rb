
menu = "\n                  main menu\n=====================================================\n1) add new item\n2) list all items\n3) quit\n\n"
# puts File.exists?("list.txt")


shopping_list = []
loop do
    puts menu
    print "enter and option: "
    user_input = gets.chomp.to_i

    if user_input == 1
        print "enter item name:"
        user_input = gets.chomp.to_s
        shopping_list.push(user_input)
        File.write("list.txt", shopping_list.join("\n"), mode: "a")
    elsif user_input == 2
        puts "you have the following items in your shopping list: \n\n"
        puts "==========================\n" 
        puts file_data = File.read("list.txt")

        # puts shopping_list.join(', ')
        puts "==========================\n"
        
       
    elsif user_input == 3
        break

    end

end


# require 'pry'
# binding.pry