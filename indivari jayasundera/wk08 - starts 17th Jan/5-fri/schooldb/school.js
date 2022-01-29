const Student = require("./student.js");
const Grade = require("./grade.js");

class School {
  constructor(name) {
    this.name = name;
    this.grades = new Map();
  }

  // school.add("Phil", 1)
  add(studentName, gradeId) {
    if (!this.grades.has(gradeId)) {
      this.grades.set(gradeId, new Grade(gradeId));
    }

    const grade = this.grades.get(gradeId);
    const student = new Student(studentName);
    grade.addStudent(student);
  }

  // {1: ["James", "Phil"], 2: ["Jennifer"], 3: ["Little Billy dropp tables"]}
  getSummary() {
    // Derive an array from grades map.
    const gradesArray = Array.from(this.grades, ([key, value]) => value);
    const summary = gradesArray.map((g) => g.getSummary()).join(",");
    return `{ ${summary} }`;
  }

  db() {
    console.log(this.getSummary());
  }

  // school.grade(1)
  grade(gradeId) {
    const grade = this.grades.get(gradeId);
    console.log(grade.getSummary());
  }
}

let school = new School("Haleakala Hippy School");

school.add("Phil", 1);
school.add("Blair", 1);
school.add("Jennifer", 2);
school.add("Little Billy drop tables", 3);

school.grade(1);
school.db();
