// tutorial no --> 11 

type TUser = { userName: string, userId: number }

let users: TUser[];
users = []

let user1: TUser;
user1 = { userName: "Ratul", userId: 101 }
users.push(user1)

let user2: TUser
user2 = { userName: "Alamin", userId: 102 }
users.push(user2)

let user3: TUser
user3 = { userName: "Rabbi", userId: 103 }
users.push(user3)

let user4: TUser
user4 = { userName: "Zakaria", userId: 104 }
users.push(user4)

// console.log(users);

// custome type 

type RequestType = "GET" | "POST";

let getRequest: RequestType;

getRequest = "GET";

// console.log(getRequest);

function requestHandler(requestType: RequestType) {
    console.log(requestType);
}
requestHandler("GET")