

//  Exercise 1.1: Function Declaration vs Expression

// Function Declaration
function greetDeclaration(name) {
  return "Hello " + name + "!";
}

// // Function Expression
const greetExpression = function (name) {
  return "Hello " + name + "!";
};

console.log(greetDeclaration("pheng"));
console.log(greetExpression("pheng"));

// Exercise 1.2: Arrow Functions

// With curly brace
const square = (n) => {
  return n * n;
};

// Without curly brace
const squareOneLine = (n) => n * n;

console.log(square(4));
console.log(squareOneLine(5));

//Exercise 1.3: Callback Functions

function processArray(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i]);
    console.log(result);
  }
}

const Numbers = [1, 2, 3, 4];
processArray(Numbers, (num) => num * 2);

// Part 2 — Arrays

//Exercise 2.1: Declaring and Modifying Arrays

// 1. Create an array named fruits with at least 3 items
const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);

// 2. Use push to add a new fruit to the end
fruits.push("Mango");
console.log(fruits);

// 3. Use unshift to add a new fruit to the beginning
fruits.unshift("Strawberry");
console.log(fruits);

// 4. Use pop to remove the last fruit
fruits.pop();
console.log(fruits);

// 5. Use shift to remove the first fruit
fruits.shift();
console.log(fruits);

const numbers = [1, 2, 3, 4, 5];

// Exercise 2.2: forEach

// Print each number multiplied by 2
numbers.forEach((num) => {
  console.log(num * 2);
});

//Exercise 2.3: map

// Create a new array containing the square of each number
const squared = numbers.map((num) => num * num);
console.log("Squared numbers:", squared);

//  Exercise 2.4: filter

// Create a new array containing only the even numbers
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// Part 3 — Objects

// Exercise 3.1: Creating and Modifying an Object

// 1. Create an object named user with properties name, age, and email
const user = {
  name: "pheng",
  age: 19,
  email: "phengo.app@gmail.com",
};

// 2. Add a new property, e.g. country
user.country = "Cambodia";

// 3. Change (assign) the value of age
user.age = 20;

// 4. Delete the email property
delete user.email;

// 5. Log the final object
console.log(user);

//Exercise 3.2: Square Bracket Notation

// Add a property with a multi-word key using square bracket notation
user["favorite color"] = "Blue";

// Access and log the value using square bracket notation
console.log(user["favorite color"]);

// Exercise 3.3: Checking for a Key & Looping

// Check whether user contains the key "email" using the `in` operator
const hasEmail = "email" in user;
console.log(hasEmail);

// Use a for...in loop to print every key and value in the user object
for (let key in user) {
  console.log(key, user[key]);
}

// Bonus Challenge

// 1. Create an array of objects
const students = [
  { name: "Pheng", grade: 68 },
  { name: "Heang", grade: 85 },
  { name: "Dara", grade: 74 },
  { name: "Nuth", grade: 92 },
  { name: "Hong", grade: 80 },
  { name: "Lino", grade: 90 },

];

// 2. Use map to produce a new array of just the names
const studentNames = students.map((student) => student.name);
console.log(studentNames);

// 3. Use filter to find students with a grade of 80 or above
const topStudents = students.filter((student) => student.grade >= 80);
console.log(topStudents);
