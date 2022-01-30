

class School {

    constructor(name) {
        this.name = name
        this.db = {}
    }

    add(name, grade) {
        this.db[grade] ? this.db[grade].push(name) : this.db[grade] = [name];
    }
    grade(gradeNum) {
        return this.db[gradeNum];
    }    

}

let school = new School("Smash the State Primary School");
school.add("Phil", 1);
school.add("Blair", 1);
school.add("Jennifer", 2);
school.add("Little Billy drop tables", 3);
console.log(school.db);
console.log(school.grade(1));



