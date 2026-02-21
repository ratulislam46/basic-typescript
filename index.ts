
// Array 
let skills: string[];
skills = ["HTML", "CSS", "React", "Next"];
// console.log("Skills list :", skills);

// Tuple 
let Information: [number, string, boolean] = [101, "Rahim", true];
// console.log(Information);


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