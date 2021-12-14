str = "Now I know what a TV dinner feels like"

def letter_reverse(str)
    array =  str.split(" ")
    reverse_phrase =""
    reverse_array= []

    array.each do |word|
   reverse_word = word.reverse

    reverse_array.push(reverse_word)
 end

return reverse_array.join(" ")
end

puts letter_reverse(str)