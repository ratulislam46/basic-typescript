// 3.1 --> Array 
var skills;
skills = ["HTML", "CSS", "React", "Next"];
// console.log("Skills list :", skills);
// 3.2 --> Tuple 
var Information = [101, "Rahim", true];
var user1 = {
    id: 105,
    name: "Sakib",
    role: "Admin"
};
// console.log(user1);
// 5 -- > Function Typing
function sum(a, b) {
    return a + b;
}
// console.log(sum(3,5));
function Aleart() {
    console.log("Typescript don't run browser");
}
;
// Aleart()
// 6.1 --> Union
var result;
result = "Success";
result = 200;
var Teacher1 = { name: "Yusuf", subject: "English" };
var Teacher2 = { id: 6, salary: 500 };
var Teacher3 = { name: "Jahid", subject: "Math", id: 1, salary: 300 };
var Teacher4 = { name: "Jahid", subject: "Math" };
// console.log(Teacher1);
// console.log(Teacher2.salary);
// console.log(Teacher3);
// console.log(Teacher4);
// 7. --> Enums
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
;
var move = Direction.Left;
// console.log(move);
var Status;
(function (Status) {
    Status["pending"] = "PENDING";
    Status["runing"] = "RUNING";
    Status["cancelled"] = "CANCELLED";
    Status["completed"] = "COMPLETED";
})(Status || (Status = {}));
function updateStatus(status) {
    console.log("Order Status:", status);
}
// updateStatus(Status.completed)
// 8 --> Generics
function identity(value) {
    return value;
}
;
var stringValue = identity("TS is Awesome");
// console.log(stringValue);
// 8.1 
function sumProps(a, b) {
    return [a, b];
}
var sumFunctionCall = sumProps("Age:", 23);
console.log(sumFunctionCall);
// 9 --> Type Assertion 
var myData = "I completed my ssc and hsc";
var textLength = myData.length;
// console.log(textLength);
// 10 --> Type Inference
var age = 25; // inferred as number
var userName = "Ali"; // inferred as string
var isActive = true; // inferred as boolean
// console.log(typeof userName);
// 11 --> Literal Types 
var direction;
direction = "down";
// console.log(direction);
// 12 --> Optional $ Default Parameters 
function userRole(role) {
    if (role === void 0) { role = "user"; }
    console.log(role);
}
;
// userRole()
// userRole("Admin")
// 13 --> unknown and Any 
var value = "TypeScript";
if (typeof value === "string") {
    // console.log(value.toUpperCase());
}
// let anything: any = 10;
// anything.toUpperCase();      //  runtime error হতে পারে
