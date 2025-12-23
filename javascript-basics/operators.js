/*
This file demonstrates:
  - Arithmetic operators
  - Comparison operators
  - Logical operators
*/

let a = 5;
let b = 3;

// Arithmetic Operators
console.log("Addition:", a + b); // 8
console.log("Subtraction:", a - b); // 2
console.log("Multiplication:", a * b); // 15
console.log("Division:", a / b);    // 1.666...     
console.log("Modulus:", a % b);     // 2
console.log("Exponentiation:", a ** b); // 125

// Increment / Decrement
console.log("Increment:", ++a); // 6
console.log("Decrement:", --b); // 2

// Comparison Operators     
console.log("Equal (===):", a === b); // false
console.log("Not Equal (!==):", a !== b);   // true
console.log("Greater Than (>):", a > b); // true
console.log("Less Than (<):", a < b); // false
console.log("Greater Than or Equal (>=):", a >= b); // true
console.log("Less Than or Equal (<=):", a <= b); // false

// Logical Operators
const x = true;
const y = false;
console.log("Logical AND (&&):", x && y); // false
console.log("Logical OR (||):", x || y); // true
console.log("Logical NOT (!):", !x); // false       