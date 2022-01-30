# Write a method called get_squares that takes an argument, an array of numbers. This method will return a new array of numbers that qualify as perfect squares from the argument array.

# NOTE: The returned array of perfect squares should be in ascending order with no duplicates.

# Notes:
# Math.sqrt(num) will always return a float (16 returns 4.0 and not 4)

def get_squares(num_array)
    sqrtArray = []
    for number in num_array 
        square_root = Math.sqrt(number)
        if square_root % 1 == 0 && !sqrtArray.include?(square_root.to_i)
            sqrtArray.push(square_root.to_i)
        end
    end
    sqrtArray.sort
end

# Example from gist:
get_squares([4, 1, 16, 1, 10, 35, 22])
# Example to show duplication handling:
get_squares([4, 8, 16, 24, 25, 12, 100, 4, 25, 100])