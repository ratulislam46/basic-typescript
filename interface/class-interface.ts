
interface IUserFormatter {
    formatUser: () => string;
}

class User implements IUserFormatter {
    constructor(private fullName: string, private age: number) {

    }
    formatUser = () => {
        return (`Name: ${this.fullName}, Age: ${this.age}`)
    }
}

let user = new User("Bablu", 23);
// console.log(user);
// console.log(user.formatUser());