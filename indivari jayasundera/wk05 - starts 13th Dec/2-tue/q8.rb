def scream(num)
    base_str = "lol"
    if num==0
        return "crickets"
    elsif num == 1
        return base_str
    else
            i=1
            while i<num
                base_str = base_str + "ol"
            i += 1
            end
    return base_str
    end
end

puts(scream(0));
puts(scream(2));
puts(scream(3));
puts(scream(4));