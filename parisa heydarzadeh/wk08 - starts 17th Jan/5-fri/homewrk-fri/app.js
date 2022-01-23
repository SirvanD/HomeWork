let school = new School("Haleakala Hippy School");
class School {
  constructor(schoolName, db) {
    this.schoolName = schoolName;
    this.db = db;
  }

  add(studentName, grade) {
    if (studentName has the same grade??) {
      this.db[grade].push(studentName);
    } else {
      this.db[grade] = [studentName];
    }
  }

 
school.add("Phil", 1);
school.add("Blair", 1);
school.add("Jennifer", 2);
school.add("Little Billy drop tables", 3);
school.db;
