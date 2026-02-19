var userInfo1;
var userInfo2;
var userInfo3;
userInfo1 = function () {
    console.log("This is Md Ratul Howlader");
};
userInfo2 = function (name) {
    console.log(name);
};
userInfo3 = function (name, age) {
    console.log("Name: ".concat(name, ", Age: ").concat(age));
};
userInfo1();
userInfo2("Md Ratul Howlader");
userInfo3("Rabbi", 23);
