# 📘 TypeScript Master Roadmap

---

## 📌 Table of Contents

- Environment Setup  
- Basic Types  
- Array and Tuple  
- Interface & Type Alias  
- Function Typing  
- Union & Intersection  
- Enums  
- Generics  
- Type Assertion  

---

## 1️⃣ Environment Setup

**বিবরণ:**  
TypeScript সরাসরি ব্রাউজারে চলে না। এটি JavaScript-এ compile (transpile) করতে হয়।

**কেন ব্যবহার করবেন:**  
TypeScript ব্যবহার করতে হলে development environment সেটআপ করা জরুরি।

### 🔹 Install globally

```bash
npm install -g typescript
```

### 🔹 Initialize project

```bash
tsc --init
```

---

## 2️⃣ Basic Types

**বিবরণ:**  
TypeScript-এ ভেরিয়েবলের ডেটা টাইপ আগে থেকেই নির্ধারণ করা যায়।

**কেন ব্যবহার করবেন:**  
ভুল টাইপ ব্যবহার করলে compile-time error দেখাবে।

### ✅ উদাহরণ

```typescript
let age: number = 25;
let userName: string = "Zunayed";
let isDeveloper: boolean = true;
let anything: any = "Any type allowed";
```

---

## 3️⃣ Array and Tuple

**বিবরণ:**  
Array → একই টাইপের একাধিক ডেটা রাখে  
Tuple → নির্দিষ্ট টাইপ এবং নির্দিষ্ট সংখ্যক ডেটা রাখে  

**কেন ব্যবহার করবেন:**  
ডেটা স্ট্রাকচারকে নির্দিষ্ট নিয়মের মধ্যে রাখতে।

### ✅ উদাহরণ

```typescript
// Array
let skills: string[] = ["JavaScript", "TypeScript"];

// Tuple
let user: [number, string] = [101, "Karim"];
```

---

## 4️⃣ Interface & Type Alias

**বিবরণ:**  
কাস্টম টাইপ তৈরি করতে Interface ও Type Alias ব্যবহার করা হয়।

**কেন ব্যবহার করবেন:**  
অবজেক্টের structure নির্দিষ্ট রাখতে এবং কোড reusable করতে।

### ✅ উদাহরণ

```typescript
type ID = string | number;

interface UserAccount {
  readonly id: ID;
  name: string;
  email?: string;
}

const user1: UserAccount = {
  id: 101,
  name: "Sakib"
};
```

---

## 5️⃣ Function Typing

**বিবরণ:**  
ফাংশনের parameter এবং return type নির্ধারণ করা যায়।

**কেন ব্যবহার করবেন:**  
ফাংশন যেন সবসময় সঠিক টাইপ রিটার্ন করে।

### ✅ উদাহরণ

```typescript
function calculateSum(a: number, b: number): number {
  return a + b;
}

function greet(name: string): void {
  console.log("Hello " + name);
}
```

---

## 6️⃣ Union & Intersection

**বিবরণ:**  
Union (`|`) → একাধিক টাইপের মধ্যে যেকোনো একটি  
Intersection (`&`) → একাধিক টাইপ একসাথে  

**কেন ব্যবহার করবেন:**  
Flexible এবং শক্তিশালী টাইপ সিস্টেম তৈরি করতে।

### ✅ উদাহরণ

```typescript
// Union
let result: string | number;
result = "Success";
result = 200;

// Intersection
type Teacher = { name: string; subject: string };
type Employee = { id: number; salary: number };

type Faculty = Teacher & Employee;
```

---

## 7️⃣ Enums

**বিবরণ:**  
নির্দিষ্ট নামযুক্ত constant সেট তৈরি করতে।

**কেন ব্যবহার করবেন:**  
Readable ও maintainable কোড লেখার জন্য।

### ✅ উদাহরণ

```typescript
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

let move: Direction = Direction.Up;
```

---

## 8️⃣ Generics

**বিবরণ:**  
Generics টাইপকে parameter হিসেবে ব্যবহার করতে দেয়।

**কেন ব্যবহার করবেন:**  
Reusable ও flexible function তৈরি করতে।

### ✅ উদাহরণ

```typescript
function identity<T>(value: T): T {
  return value;
}

let stringVal = identity<string>("TS is Awesome!");
let numberVal = identity<number>(100);
```

---

## 9️⃣ Type Assertion

**বিবরণ:**  
যখন আপনি নিশ্চিত থাকেন কোনো ডেটার টাইপ কী হবে।

**কেন ব্যবহার করবেন:**  
Compiler কে নির্দিষ্ট টাইপ জানাতে।

### ✅ উদাহরণ

```typescript
let myData: any = "Hello World";

let textLength: number = (myData as string).length;
```

---

