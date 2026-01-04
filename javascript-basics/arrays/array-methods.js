/**
 * ============================================================
 * JavaScript Array Methods – Practice
 * ============================================================
 * This file demonstrates commonly used JavaScript array methods.
 *
 * Methods covered:
 * - filter() → select specific values from an array
 * - map()    → transform array data into a new structure
 * - find()   → retrieve the first matching object
 * - some()   → check if at least one item matches
 * - every()  → check if all items match
 */


/* ============================================================
 * filter() Example
 * ============================================================
 * Purpose:
 * Select values from an array based on a condition.
 */

// Sample number list
const numbers = [15, 25, 35, 45, 55, 65, 75];

// Select numbers greater than 50
const filteredNumbers = numbers.filter(function (number) {
  return number > 50;
});

// Display filtered result
console.log("Numbers greater than 50:", filteredNumbers);


/* ============================================================
 * map() Example
 * ============================================================
 * Purpose:
 * Convert array items into a new format.
 */

// Sample test result data
const testResults = [
  { testName: "Login Test", passed: true },
  { testName: "Signup Test", passed: false },
  { testName: "Payment Test", passed: true }
];

// Transform test results into readable format
const report = testResults.map(function (result) {
  return {
    testName: result.testName,
    status: result.passed ? "PASS" : "FAIL"
  };
});

// Display transformed data
console.log("Test Results Report:", report);


/* ============================================================
 * find() Example
 * ============================================================
 * Purpose:
 * Retrieve the FIRST element that matches a condition.
 */

// Sample user data
const users = [
  { id: 1, name: "Alice", role: "customer", isActive: true },
  { id: 2, name: "Rosy", role: "manager", isActive: true },
  { id: 3, name: "Charlie", role: "manager", isActive: false },
  { id: 4, name: "Diana", role: "admin", isActive: true }
];

// Find the first active manager
const activeManager = users.find(function (user) {
  return user.role === "manager" && user.isActive === true;
});

// Check result before using it
if (activeManager) {
  console.log("Manager found:", activeManager.name);
} else {
  console.log("No active manager found");
}


/* ============================================================
 * some() Example
 * ============================================================
 * Purpose:
 * Check if at least ONE element satisfies a condition.
 */

// Sample product data
const products = [
  { name: "Laptop", price: 75000, inStock: false },
  { name: "Mouse", price: 500, inStock: true },
  { name: "Keyboard", price: 1500, inStock: false }
];

// Check if any product is in stock
const hasAvailableProduct = products.some(function (product) {
  return product.inStock === true;
});

// Display result
if (hasAvailableProduct) {
  console.log("Product is available");
} else {
  console.log("No products are available");
}


/* ============================================================
 * every() Example
 * ============================================================
 * Purpose:
 * Check if ALL elements satisfy a condition.
 */

// Sample shopping cart data
const cartItems = [
  { name: "Laptop", price: 75000, quantity: 1 },
  { name: "Mouse", price: 500, quantity: 2 },
  { name: "Keyboard", price: 1500, quantity: 1 }
];

// Check that all items have quantity greater than 0
const allItemsHaveValidQuantity = cartItems.every(function (item) {
  return item.quantity > 0;
});

// Display validation result
if (allItemsHaveValidQuantity) {
  console.log("All cart items have valid quantity");
} else {
  console.log("Some cart items have invalid quantity");
}
