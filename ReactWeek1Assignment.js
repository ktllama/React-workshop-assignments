class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    };
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    };

    registerStudent(studentToRegister) {
        if (!this.students.find(student => student.email === studentToRegister.email)) {
            //the students is all of them and student is the one
            this.students.push(studentToRegister); //adds student
            console.log(`added ${studentToRegister.email} to registration`);
        } else {
            console.log(`student with email ${studentToRegister.email} already exists`);
        }
    };
}

const katie = new Student("Katie", "costantinkp@gmail.com", "full-stack");
const bootCamp1 = new Bootcamp("nucamp", "react", );

bootCamp1.registerStudent(katie);

const kiersten = new Student("kiersten", "k@gmail.com", "full-stack");

bootCamp1.registerStudent(kiersten);
console.log(bootCamp1.students);