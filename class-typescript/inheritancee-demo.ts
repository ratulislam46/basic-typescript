
class User {
    // properties, methods, constructor
    userName: string;
    age: number;

    constructor(useName: string, age: number) {
        this.userName = useName;
        this.age = age
    }

    display(): void {
        console.log(`username: ${this.userName}, age: ${this.age}`);
    }
}

class Student extends User {
    studentId: number;

    constructor(userName: string, age: number, studentId: number) {
        super(userName, age);
        this.studentId = studentId;
    }
    display(): void {
        console.log(`username: ${this.userName}, age: ${this.age}, student ID: ${this.studentId}`);
    }
}

let Student1 = new Student("abaydul", 31, 12887834)
Student1.display()