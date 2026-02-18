// tutorial no --> 11 
var users;
users = [];
var user1;
user1 = { userName: "Ratul", userId: 101 };
users.push(user1);
var user2;
user2 = { userName: "Alamin", userId: 102 };
users.push(user2);
var user3;
user3 = { userName: "Rabbi", userId: 103 };
users.push(user3);
var user4;
user4 = { userName: "Zakaria", userId: 104 };
users.push(user4);
var getRequest;
getRequest = "GET";
// console.log(getRequest);
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");
