
class School {
    
    constructor() {
        this.name
        this.studentGrade
        this.db = {}
        
    }

    add(name, studentGrade) {
        this.name = name
        this.studentGrade = studentGrade

        if (this.db[studentGrade] === undefined) {
            this.db[studentGrade] = [name]
        } else {
            this.db[studentGrade].push(name)
        }
        
    }

    grade(studentGrade) {
        this.studentGrade = studentGrade

        return this.db[studentGrade]
    }
    
}


let school = new School("Haleakala Hippy School")

school.add("Jennifer", 2)
school.add("Phil", 1)
school.add("Blair", 1)
school.add("Little Billy drop tables", 3)

// console.log(school);

console.log(school.db);
console.log(school.grade(1));
