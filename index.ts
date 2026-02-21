
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