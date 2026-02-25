
// 1 
function addNumbers(num1: number, num2: number): number {
    return num1 + num2;
};
addNumbers(4, 5)


// 2
let userId: string | number;
function printUserId(id: string | number): string | number {
    return id;
};
// console.log(printUserId("Ratul"));


// 3 
interface User {
    id: number
    name: string
    email: string
    isAdmin?: boolean
}
let user: User = {
    id: 10,
    name: "Hello",
    email: "hello@gmail.com"
};


// 4 
type Teacher = { subject: string }
type Employee = { salary: number }

type FacultyType = Teacher & Employee;
let facultyMember: FacultyType = {
    subject: "Math",
    salary: 20000
}


// 5 
enum Role { "ADMIN", "USER", "GUEST" }
function getRoleMessage(role: Role): string {
    if (role === Role.ADMIN) {
        return "Welcome Admin";
    } else if (role === Role.USER) {
        return "Welcome User";
    } else {
        return "Welcome Guest";
    }
}
// console.log(getRoleMessage(Role.ADMIN));



// 6
function identity<T>(value: T): T {
    return value
}
console.log(identity(30));
console.log(identity("Number"));



// 7
interface Student {
    name: string;
    marks: number;
}
let students: Student[] = [
    { name: "Ratul", marks: 85 },
    { name: "Karim", marks: 60 },
    { name: "Rahim", marks: 90 }
];
function getHighMarksStudents(data: Student[]): Student[] {
    return data.filter(student => student.marks > 80);
}
// console.log(getHighMarksStudents(students));




// 8
function printLength(value: string | number) {
    if (typeof value == "string") {
        console.log(value.length);
    }
    if (typeof value == "number") {
        console.log("This is a number");
    }
}
printLength(20)
printLength("We are Bangladeshi")



// 9
interface User {
    id: number;
    name: string;
    email: string;
}

function updateUser(user: User, updates: Partial<User>): User {
    return { ...user, ...updates };
}

let user1: User = {
    id: 1,
    name: "Ratul",
    email: "ratul@gmail.com"
};

console.log(updateUser(user1, { name: "Arfan" }));
