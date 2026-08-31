//Ex:1

// 1. A user's age, which will be updated on their birthday  (let)
// 2. The value of PI for a calculation  (let)
// 3. A shopping cart total that changes as items are added  (let)
// 4. A person's country of birth (never changes)  (const)

//Ex:2
let a = 25;
number;
let b = "Hello";
string;
let c = true;
Boolean;
let d = 3.14;
number;
let e = null;
object;
let f = undefined;
undefined;
let g = [1, 2, 3];
object;

//Ex:3
const name = "Jake";
name = "Jin"; //(Error: The name cannot change)
let PI = 3.14159;
PI = 3.14;

for (var i = 0; i < 3; i++) {}
let ages; // Not initialize the value of age yet
console.log(age + 5);

//EX:4
console.log(10 % 3); //1
console.log(5 === "5"); //false
console.log(5 == "5"); //true
console.log(2 ** 3); //8
console.log(null ?? "default"); //(default)
console.log(0 || "fallback"); //fallback
console.log(!true && false); //false

//EX:4
let num1 = 2;
let num2 = 4;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 <= num2);
console.log(num1 >= num2);
console.log(num1 == num2);
console.log(num1 === num2);

//EX:5
if (score > 90) console.log("A");

if (score >= 80 && score < 90) console.log("B");

if (score >= 70 && score < 80) console.log("C");

if (score >= 60 && score < 70) console.log("D");

if (score < 60) console.log("F");

//EX:6
let day = 7;
switch (day) {
  case 1:
    console.log("MONDAY");
    break;
  case 2:
    console.log("TUESDAY");
    break;
  case 3:
    console.log("WEDNESDAY");
    break;
  case 4:
    console.log("THURDAY");
    break;
  case 5:
    console.log("FRIDAY");
    break;
  case 6:
    console.log("SATURDAY");
    break;
  case 7:
    console.log("SUNDAY");
    break;
}

//EX:7

let age = 20;
const canVote = age >= 18 ? true : false;

console.log(canVote);

//EX:8

let num = 20;
let result = num % 2 === 0 ? "Even" : "Odd";
console.log(result);

//EX:9
for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//EX:10
for (let i = 10; i >= 0; i--) {
  console.log(i);
}
console.log("Liftoff");
