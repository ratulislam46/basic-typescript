
class User {
    // properties, methods, constructor
    userName: string;
    age: number;

    constructor(useName: string, age: number) {
        this.userName = useName;
        this.age = age
    }

    display(): void {
        console.log(`username: ${this.userName}, age: ${this.age}`);
    }
}

// class object
// user1= name: Ratul Islam , age: 23;
// user2= name: Rabbi Islam , age: 23;

let user1 = new User("Ratul Islam", 23)
user1.display()