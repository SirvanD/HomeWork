class School {
    constructor(name,db){
        this.name = name
        this.db = db
    }

    add(student,grade){
        if(!([grade] in this.db)){
        Object.assign(this.db, {[grade]: [student]});
        } else {
        this.db[grade].push(student)
        }

    }
}

let school = new School("Haleakala Hippy School",{})

school.add("Phil", 1)
school.add("Blair", 1)
school.add("Jennifer", 2)
school.add("Little Billy drop tables", 3)
console.log(school)