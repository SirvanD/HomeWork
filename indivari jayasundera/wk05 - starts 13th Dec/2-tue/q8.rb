def scream(num)
    base_str = "lol"
    if num==0
        puts "crickets"
    elsif num == 1
        puts base_str
    else
            i=1
            while i<num
                base_str = base_str + "ol"
            i += 1
            end
    puts base_str
    end
end

scream(0);
scream(2);
scream(3);
scream(4);