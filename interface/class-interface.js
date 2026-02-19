var User = /** @class */ (function () {
    function User(fullName, age) {
        var _this = this;
        this.fullName = fullName;
        this.age = age;
        this.formatUser = function () {
            return ("Name: ".concat(_this.fullName, ", Age: ").concat(_this.age));
        };
    }
    return User;
}());
var user = new User("Bablu", 23);
// console.log(user);
// console.log(user.formatUser());
