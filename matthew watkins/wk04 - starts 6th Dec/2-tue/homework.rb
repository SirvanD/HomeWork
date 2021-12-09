days_of_the_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

days_of_the_week.shift()

# puts days_of_the_week

days_of_the_week2 = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", ["Saturday", "Sunday"] ]

days_of_the_week2.pop()

puts days_of_the_week2

planeteers = ["earth"]

### 1. Create an array of the days of the week
- Create a variable named `days_of_the_week` as an array of the following:
    - Sunday
    - Monday
    - Tuesday
    - Wednesday
    - Thursday
    - Friday
    - Saturday




# more arrays

Starting with the following array...

# > remember to test your code and use (irb/pry/p)!


planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]


Access the second value in `planeteers`.

```rb
p planeteers[1]
```

Add "Heart" to the end of `planeteers`.

```rb
p planeteers[] = planeteers.push("heart") Heart# Your answer here
```

Combine `planeteers` with `rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]` and save the result in a variable called `heroes`.

```rb
planeteers.concat(rangers) # Your answer here
planeteers = heroes
```

Alphabetize the contents of `heroes` using a method. [The Ruby documentation might help](http://ruby-doc.org/core-2.2.0/Array.html).

```rb
# Your answer here
heroes.sort()
```

Randomize the contents of `heroes` using a method. [The Ruby documentation might help](http://ruby-doc.org/core-2.2.0/Array.html).

```rb
# Your answer here
```

Select a random element from `heroes` using a method. [The Ruby documentation might help](http://ruby-doc.org/core-2.2.0/Array.html).

```rb
# Your answer here
```

display each `hero` in a new line on the terminal using the `.each` method

```rb
# Your answer here
```

display each `hero` in a new line on the terminal using the `.each` method only if the hero starts with the letter 'W'

```rb
# Your answer here
```