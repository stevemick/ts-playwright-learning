/*
JavaScript Functions & Arrow Functions

  This file demonstrates:
  - Regular functions
  - Arrow functions
  - Boolean return functions
  - Input validation with null handling
*/

// Regular function to check login status
function checkLoginStatus(isLoggedIn) {
  if (isLoggedIn) {
    return 'User is logged in.';
  }
  return 'User is not logged in.';
}

// Example usage
console.log(checkLoginStatus(true));
console.log(checkLoginStatus(false));

// Arrow function that returns a boolean value
// Used for simple true / false checks
const isEven = number => number % 2 === 0;

console.log(isEven(4)); // true
console.log(isEven(5)); // false

// Arrow function with multiple conditions
// Validates username by checking null, undefined, and empty values
const validateLogin = username => {
  if (username == null || username.trim() === '') {
    return 'Invalid username';
  }
  return 'Login allowed';
};

// Example test cases
console.log(validateLogin('steve'));
console.log(validateLogin(''));
console.log(validateLogin('   '));
console.log(validateLogin(null));
console.log(validateLogin(undefined));

