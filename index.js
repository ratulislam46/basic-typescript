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
