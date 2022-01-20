require 'pry'

class Phone 
    @@phone_number 

    def initialize(phone_number)
        @phone_number = phone_number
    end

    def area_code
        @phone_number[0..2]
    end
    

    def number
        if @phone_number.length == 10
            area_code = @phone_number.area_code()
            @phone_number = "(#{area_code}) #{@phone_number[3..5]}-#{@phone_number[6..-1]}"
        else
            
            if @phone_number.include? "."
                @phone_number.delete(".")
                
            elsif @phone_number[0] == 1.to_s && @phone_number.length == 11
                @phone_number[1..-1]
            else
                @phone_number = "0000000000" 
                
            end
            
        end
        
    end 
    
    
    
    
end 

