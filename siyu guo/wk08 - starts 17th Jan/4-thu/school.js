// Grade School
// Write a small program that stores students along with the grade that they are in.

// This is meant to test your class, object & array knowledge. No actual database needed.

// let school = new School("Haleakala Hippy School")
// If no students have been added, the db should be empty:

// school.db
// # => {}
// When you add a student, they get added to the correct grade.

// school.add("Jennifer", 2)
// school.db
// // {2: ["Jennifer"]}
// You can, of course, add several students to the same grade, and students to different grades.

// school.add("Phil", 1)
// school.add("Blair", 1)
// school.add("Jennifer", 2)
// school.add("Little Billy drop tables", 3)
// school.db
// // {1: ["James", "Phil"], 2: ["Jennifer"], 3: ["Little Billy dropp tables"]}
// Also, you can ask for all the students in a single grade:

// school.grade(1)
// // ["Phil", "Blair"]

class School {
    constructor(name) {
        this.name = name;
        this.db = {}
    }

    add(studentName, grade) {
        if (grade in this.db) {
            this.db[grade].push(studentName)
        } else {
            this.db[grade] = [studentName]
        }
    }
    grade(grade) {
        return this.db[grade]
    }
}

let school = new School("Haleakala Hippy School")

school.add("Phil", 1)
school.add("Blair", 1)
school.add("Jennifer", 2)
school.add("Little Billy drop tables", 3)
school.grade(1)
return school.db