var User = /** @class */ (function () {
    function User(useName, age) {
        this.userName = useName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("username: ".concat(this.useName, ", age: ").concat(this.age));
    };
    return User;
}());
// class object
// user1= name: Ratul Islam , age: 23;
// user2= name: Rabbi Islam , age: 23;
var user1 = new User("Ratul Islam", 23);
user1.display();
