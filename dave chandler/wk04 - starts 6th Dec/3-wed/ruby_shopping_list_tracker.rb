# items entered by the user
$items = []
$menu_selection = -1
$quit = false

def draw_menu
  puts('main menu
  =========
  1) add new item
  2) list all items
  3) quit

  ')

  print 'enter an option: '
  $menu_selection = gets.chomp

  case $menu_selection.to_i
  when 1
    add_new_item
  when 2
    list_all_items
  when 3
    quit
  else
    puts 'Error:'
  end
end

def quit
  $quit = true
end

def add_new_item
  print('enter item name:')
  new_item = gets.chomp
  $items.push(new_item) unless new_item.strip.empty?
end

def list_all_items
  puts "\nyou have the following items in your shopping list:"
  puts("#{$items.join(', ')}\n\n")
end

draw_menu until $quit
