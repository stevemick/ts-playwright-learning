/* Error handling examples using try...catch and throw */

/* ---------- Program 1: Get String Length ---------- */

// Returns the length of a string safely
function getStringLength(str) {
  try {
    return str.length; // May fail if input is invalid
  } catch (error) {
    console.log("Invalid input: Please provide a string");
  }
}

// Test cases
getStringLength(null);
const result = getStringLength("Hello World");
console.log("String length:", result);


/* ---------- Program 2: Validate Age ---------- */

// Validates age input
function validateAge(age) {
  try {
    if (typeof age !== "number") {
      throw new Error("Age must be a number");
    }

    if (age < 18) {
      throw new Error("User must be at least 18 years old");
    }

    return "Access granted";
  } catch (error) {
    return `Validation Error: ${error.message}`;
  }
}

// Test cases
console.log(validateAge(25));
console.log(validateAge(15));
console.log(validateAge("twenty"));


/* ---------- Program 3: Get User Email ---------- */

// Returns email from a user object
function getUserEmail(user) {
  try {
    if (user === null || user === undefined) {
      throw new Error("User object is missing");
    }

    if (!user.email) {
      throw new Error("Email not found");
    }

    return user.email;
  } catch (error) {
    return `Error: ${error.message}`;
  }
}

// Test data
const validUser = { name: "Alice", email: "alice@example.com" };
const invalidUser = { name: "Bob" };

// Test cases
console.log(getUserEmail(validUser));
console.log(getUserEmail(invalidUser));
console.log(getUserEmail(null));
