export { }

// tsc index.ts -> index.js ->node index.js 

let userName: string = "Ratul islam";
let age: number = 23
console.log(userName);
console.log(age);

function addNumbers(num1: number, num2: number) {
    return num1 + num2;
}
// addNumbers(20, 40)
console.log(addNumbers(30, 40));