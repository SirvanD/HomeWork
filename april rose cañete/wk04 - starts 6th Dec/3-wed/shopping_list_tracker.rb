require 'pry'

    
    def menu()
        puts "main menu"
        puts "========="
        puts "1) add new item"
        puts "2) list all items"
        puts "3) quit\n\n"
    end

    shopping_list = []

    loop do
        menu()

        print "enter an option: "
        input = gets.chomp.to_i

        # binding.pry
        # puts input
        
        if input == 1
            puts "\n"
            print 'enter item name: '
        
            shopping_list.push(gets.chomp)
        end

        if input == 2
            puts "\n"
            puts 'you have the following items in your shopping list:'
            puts shopping_list.join(',')
            puts "\n"
        end

        if input == 3
            break
        end
    end