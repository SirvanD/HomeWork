require 'pry'

class Phone 
    

    def initialize(phone_number)
        @phone_number = phone_number
        
    end

    def area_code
        @phone_number[0..2]
    end
    
    def number
        if @phone_number.length == 11
            if @phone_number[0] == 1.to_s 
                @phone_number[1..-1]
            else
                @phone_number = "0000000000"
            end
        elsif @phone_number.length == 9
             @phone_number = "0000000000"
        else
             @phone_number.delete("^0-9")
        end
        
    end 
    def to_s
        "(#{@phone_number[0..2]}) #{@phone_number[3..5]}-#{@phone_number[6..-1]}"
    end
    
end 

puts number = Phone.new("1234567890").to_s


# if @phone_number.length == 10
#     area_code = @phone_number.area_code()
#     @phone_number = "(#{area_code}) #{@phone_number[3..5]}-#{@phone_number[6..-1]}"
# else