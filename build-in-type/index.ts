export { }

// built in data type: number, string, boolean, void, undefined, null; 

let id: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isActivated: boolean;

id = 6;
firstName = "Ratul";
lastName = "Islam";
fullName = firstName + ' ' + lastName;
isActivated = true;
// console.log(`User id ${id}, user name: ${fullName}, user account ${isActivated}`);

function checkVoid(): void {
    console.log('I am Void');
}
checkVoid()