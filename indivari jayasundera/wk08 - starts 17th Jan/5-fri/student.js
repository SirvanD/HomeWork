class Student {
  constructor(studentName) {
    this.studentName = studentName;
  }

  getSummary() {
    return `"${this.studentName}"`;
  }
}

module.exports = Student;
