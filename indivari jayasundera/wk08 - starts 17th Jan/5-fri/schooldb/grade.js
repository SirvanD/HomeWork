const Student = require("./student.js");

class Grade {
  constructor(id) {
    this.id = id;
    this.students = [];
  }

  addStudent(student) {
    this.students.push(student);
  }

  // 1: ["James", "Phil"]
  getSummary() {
    const studentNames = this.students.map((s) => s.getSummary()).join(",");

    return `${this.id}: [${studentNames}]`;
  }
}

module.exports = Grade; // exporting the Grade module
