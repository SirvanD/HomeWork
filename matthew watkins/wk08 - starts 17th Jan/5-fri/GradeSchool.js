class School {




    //properties
    constructor() {
        this.db = {}
        this.name
        this.year

    }

    //behaviours
    add(name, year) {
        this.name = name
        this.year = year
            //console.log(this.db[year])
            // if (year == this.db[year]) {
            //     console.log(this.db.year.push("name"))
            // } else {
            //     this.db[year] = [name]
            // }

        if (this.db.hasOwnProperty(year)) {
            this.db[year].push(name)
        } else {
            this.db[year] = [name]
        }


    }

    grade(year) {
        this.year = year
        return this.db[year]
    }


}

let school = new School("Haleakala Hippy School")



school.add("Phil", 1)
school.add("Blair", 1)
school.add("Jennifer", 2)






console.log(school.db);

console.log(school.grade(1));