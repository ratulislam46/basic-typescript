
interface TUser {
    id: number,
    name: string,
    age: number
}

let users: TUser[] = [];

let user1: TUser = {
    id: 1,
    name: 'Rahim',
    age: 45
}

let user2: TUser = {
    id: 2,
    name: 'Kahim',
    age: 63
}

users.push(user1)
users.push(user2)
// console.log(users);

const printUserInfor = (user: TUser) => {
    console.log(`User Id: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
}

users.forEach(user => printUserInfor(user))