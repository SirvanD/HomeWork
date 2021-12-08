# 1. Create an array of the days of the week
# Create a variable named days_of_the_week as an array of the following:
# Sunday
# Monday
# Tuesday
# Wednesday
# Thursday
# Friday
# Saturday

days_of_the_week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


# 2. My calendar says the first day is Monday...
# Remove Sunday from the first postion and move it to the last position. Use array methods.

days_of_the_week.shift(1)
days_of_the_week.push("Sunday")

# 3. Create a new array of the days of the week:
# you can do this programmatically or just type in manually
# The first inner array should be the weekdays
# The second inner array should be the weekend days
days_of_the_week = [['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], ['Saturday','Sunday']]


# 4. Remove either the weekdays or the weekends
# Your choice...
days_of_the_week.shift()

# 5. Sort the remaining days alphabeticallyc
days_of_the_week.sort