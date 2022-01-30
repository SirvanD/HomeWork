class School {
    constructor(name) {
        this.db = {}
    }

    add(student, num) {
        const studentList = this.db[num] || [];
        this.db[num] = [student, ...studentList];
    }

    grade(num) {
        console.log(this.db[num])
    }
}

let school = new School("Haleakala Hippy School")

school.add("Phil", 1)
school.add("Blair", 1)
school.add("Jennifer", 2)
school.add("Little Billy drop tables", 3)
school.add("Carter", 4)

console.log(school.db);
school.grade(1)