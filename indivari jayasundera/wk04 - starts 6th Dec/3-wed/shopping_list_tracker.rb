
$items_list =[]

def add_item()
  
    system("clear")
    puts("enter item name: ")
    item = gets.chomp
    $items_list.push(item)
    show_main_menu
   

end

def list_items()
    system("clear")
    puts("Items in your shopping list : ")
    puts($items_list.join(','))
    show_main_menu

end

def quit()
    system("clear")
    puts("Thank you for using shopping list tracker !")
    exit
end

def show_main_menu()
    puts("main menu")
    puts("=========")
    puts("1)  add new items")
    puts("2)  list all items")
    puts("3)  quit")

    print("enter an option : ")
    option = gets.chomp

    if option == "1"
        add_item()
    elsif option == "2"
        list_items()
    else
        quit
    end
end


show_main_menu


