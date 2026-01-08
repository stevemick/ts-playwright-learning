/**
 * JavaScript destructuring examples
 * Demonstrates object and array destructuring with clean usage
 */


/* ---------- Object Destructuring ---------- */

const product = {
  name: "Laptop",
  price: 75000,
  inStock: true
};

// Extract required properties and rename where needed
const { name, price: productPrice } = product;

console.log(name);
console.log(productPrice);


/* ---------- Object Destructuring with Default Values ---------- */

const user = {
  username: "alice"
};

// Use default value when property is missing
const { username, age = 18 } = user;

console.log(username);
console.log(age);


/* ---------- Array Destructuring ---------- */

const colors = ["red", "green", "blue"];

// Extract values by position
const [firstColor, secondColor] = colors;

console.log(firstColor);
console.log(secondColor);


/* ---------- Function Parameter Destructuring ---------- */

function printProduct({ name, price }) {
    console.log(name);
    console.log(price);
}

printProduct({ name: "Phone", price: 30000 });



/* ---------- Nested Object Destructuring ---------- */

const order = {
  id: 101,
  customer: {
    name: "Bob",
    city: "Delhi"
  }
};

// Extract nested values
const {customer: { name: customerName, city }} = order;

console.log(customerName);
console.log(city);