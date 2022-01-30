require "pry"

def shopping_list()
    listArr = []
    loop do 
        print "\nMain Menu\n=========\n1) Add new item\n2) List all items\n3) Quit\n\nEnter an option: "
        number = gets.chomp
        if number == "1"
            print "Enter item name: "
            item = gets.chomp
            listArr = listArr.push(item)
            puts listArr
        elsif number == "2"
            # Wanted this to show on a new line for each item. more like a real list would be.
            puts "You have the following items in your shopping list:"
            listArr.each do |item|
                puts item
            end
        elsif number == "3"
            exit
        end
    end
end

shopping_list()