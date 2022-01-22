class School {
  constructor(schoolName = "", db = {}) {
    console.log("the school has been created");
    this.schoolName = schoolName;
    this.db = db;
  }
  add(name, grade) {
    if (this.db.hasOwnProperty(grade)) {
      this.db[grade].push(name);
    } else {
      this.db[grade] = [name];
    }
  }

  name() {
    console.log(this.schoolName);
  }

  grade(input) {
    console.log(this.db[input]);
  }
}
var school = new School("hippy school");

console.log(school.db);
school.add("Jennifer", 2);
school.add("sarah", 2);
school.add("et", 2);
school.add("sirvs", 3);
school.add("sdfsd", 4);
