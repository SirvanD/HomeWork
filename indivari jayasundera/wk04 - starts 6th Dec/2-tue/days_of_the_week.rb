
# task 1 - defining the array
days_of_the_week = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

#task 2 - removing the firs element and add it to the end
days_of_the_week.shift();
days_of_the_week.push("sunday");


#task 3 - defining two inner arrays
days_of_the_week = [
    ["monday","tuesday","wednesday","thursday","friday"],
    ["saturday","sunday"]

]


#task 4 - removing items from weekend days
2.times do
    days_of_the_week[1].pop()
end

#task 5 - Sorting the remaining array
puts("---------sorted array------------")
sortedArray = days_of_the_week[0].sort 
puts sortedArray