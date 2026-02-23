
// 3.1 --> Array 
let skills: string[];
skills = ["HTML", "CSS", "React", "Next"];
// console.log("Skills list :", skills);

// 3.2 --> Tuple 
let Information: [number, string, boolean] = [101, "Rahim", true];
// console.log(Information);



// 4 --> Interface & Type Alias
type ID = string | number;

interface UserAccount {
    id: ID;
    name: string;
    email?: string;
    readonly role: "Admin"
}

const user1: UserAccount = {
    id: 105,
    name: "Sakib",
    role: "Admin"
};
// console.log(user1);



// 5 -- > Function Typing
function sum(a: number, b: number): number {
    return a + b;
}
// console.log(sum(3,5));

function Aleart(): void {
    console.log("Typescript don't run browser");
};
// Aleart()



// 6.1 --> Union
let result: string | number;
result = "Success";
result = 200;

// 6.2 -->Intersection
type Teacher = { name: string; subject: string };
type Employee = { id: number; salary: number };
type Faculty = Teacher & Employee;
type Faculty1 = Teacher | Employee;

const Teacher1: Teacher = { name: "Yusuf", subject: "English" };
const Teacher2: Employee = { id: 6, salary: 500 };
const Teacher3: Faculty = { name: "Jahid", subject: "Math", id: 1, salary: 300 }
const Teacher4: Faculty1 = { name: "Jahid", subject: "Math" }
// console.log(Teacher1);
// console.log(Teacher2.salary);
// console.log(Teacher3);
// console.log(Teacher4);



// 7. --> Enums
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
};
let move: Direction = Direction.Left;
// console.log(move);
enum Status {
    pending = "PENDING",
    runing = "RUNING",
    cancelled = "CANCELLED",
    completed = "COMPLETED"
}
function updateStatus(status: Status): void {
    console.log("Order Status:", status);
}
// updateStatus(Status.completed)




// 8 --> Generics




// 9 --> Type Assertion 
let myData: any = "I completed my ssc and hsc";
let textLength: number = (myData as string).length;
// console.log(textLength);




// 10 --> Type Inference
let age = 25;          // inferred as number
let userName = "Ali";  // inferred as string
let isActive = true;   // inferred as boolean
// console.log(typeof userName);



// 11 --> Literal Types 
let direction: "up" | "down" | "right";
direction = "down";
// console.log(direction);



// 12 --> Optional $ Default Parameters 
function userRole(role: string = "user"): void {
    console.log(role);
};
// userRole()
// userRole("Admin")



// 13 --> unknown and Any 
let value: unknown = "TypeScript";

if (typeof value === "string") {
    // console.log(value.toUpperCase());
}

// let anything: any = 10;
// anything.toUpperCase();      //  runtime error হতে পারে