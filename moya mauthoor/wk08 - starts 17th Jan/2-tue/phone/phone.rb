
class Phone 

    def initialize(num)
        @num = num    
    end

    def number()
        cleaned_num = @num.gsub(/[() -.]/, '')
        if cleaned_num.length == 11 
            if cleaned_num[0] == "1"
                cleaned_num = cleaned_num[1..-1]
            else
                return "0000000000"
            end 
        elsif cleaned_num.length == 9
            return "0000000000"
        end
        cleaned_num
    end

    def area_code()
        area_code = @num[0..2]
    end

    def to_s()
        pretty_print = "(#{@num[0..2]}) #{@num[3..5]}-#{@num[6..-1]}"
    end
end