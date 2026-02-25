var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 1 
function addNumbers(num1, num2) {
    return num1 + num2;
}
;
addNumbers(4, 5);
// 2
var userId;
function printUserId(id) {
    return id;
}
;
var user = {
    id: 10,
    name: "Hello",
    email: "hello@gmail.com"
};
var facultyMember = {
    subject: "Math",
    salary: 20000
};
// 5 
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
function getRoleMessage(role) {
    if (role === Role.ADMIN) {
        return "Welcome Admin";
    }
    else if (role === Role.USER) {
        return "Welcome User";
    }
    else {
        return "Welcome Guest";
    }
}
// console.log(getRoleMessage(Role.ADMIN));
// 6
function identity(value) {
    return value;
}
console.log(identity(30));
console.log(identity("Number"));
var students = [
    { name: "Ratul", marks: 85 },
    { name: "Karim", marks: 60 },
    { name: "Rahim", marks: 90 }
];
function getHighMarksStudents(data) {
    return data.filter(function (student) { return student.marks > 80; });
}
// console.log(getHighMarksStudents(students));
// 8
function printLength(value) {
    if (typeof value == "string") {
        console.log(value.length);
    }
    if (typeof value == "number") {
        console.log("This is a number");
    }
}
printLength(20);
printLength("We are Bangladeshi");
function updateUser(user, updates) {
    return __assign(__assign({}, user), updates);
}
var user1 = {
    id: 1,
    name: "Ratul",
    email: "ratul@gmail.com"
};
console.log(updateUser(user1, { name: "Arfan" }));
