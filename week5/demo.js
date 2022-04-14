function Student(firstName, lastName, university, major, graduationYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.university = university;
    this.major = major;
    this.graduationYear = graduationYear;
    this.hasGraduated = graduationYear <= 2021;
}

var brayden = new Student("Brayden", "Miller", "UT Austin", "Computer Science", 2023);
var derek = new Student("Derek", "Wu", "UT Austin", "MIS", 2022);
var john = new Student("John", "Doe", "UT Austin", "Biology", 2020);

console.log(brayden.major);
console.log(derek["major"]);
console.log(john.major);

console.log(brayden.hasGraduated);
console.log(derek.hasGraduated);
console.log(john.hasGraduated);

function Course(student, name, location) {
    this.student = student;
    this.name = name;
    this.location = location;
}

var introToJavaScript = new Course(brayden, "Intro to JavaScript", "GDC 6.302");
console.log(introToJavaScript.student.graduationYear);