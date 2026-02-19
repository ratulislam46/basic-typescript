
let userInfo1: () => void;
let userInfo2: (name: string) => void;
let userInfo3: (name: string, age: number) => void;


userInfo1 = () => {
    console.log("This is Md Ratul Howlader");
}

userInfo2 = (name: string) => {
    console.log(name);
}

userInfo3 = (name, age) => {
    console.log(`Name: ${name}, Age: ${age}`);
}

userInfo1()
userInfo2("Md Ratul Howlader")
userInfo3("Rabbi", 23)