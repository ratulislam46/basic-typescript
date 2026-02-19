import { studentAge, studentName } from "./student";
import { studentCurrentAddress as address } from "./student";
import * as Student from "./student";

function studentInfo(): void {
    console.log(`Student name: ${studentName}, Student age: ${studentAge}, Student address: ${address}`);
}
// studentInfo()

function displayAllInfo (): void{
    console.log(Student);
    console.log(`Student all info: ${Student}`);
}
displayAllInfo()       