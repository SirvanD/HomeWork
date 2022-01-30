require 'pry'

    
    def menu()
        puts "main menu \n=========\n1) add new item\n2) list all items\n3) quit\n\n"
    end

    shopping_list = []

    loop do
        menu()

        print "enter an option: "
        input = gets.chomp.to_i

        # binding.pry
        # puts input
        
        if input == 1
            print "\nenter item name: "
            shopping_list.push(gets.chomp)
        elsif input == 2
            puts "\nyou have the following items in your shopping list:"
            puts shopping_list.join(', ')
            puts "\n"
        else 
            break
        end
    end