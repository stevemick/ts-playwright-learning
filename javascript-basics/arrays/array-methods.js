/*
  Array Methods Practice
  - filter() to select specific values from an array
  - map() to transform objects into a new structure
*/

// filter() Example
// Purpose: Get numbers greater than 50

const numbers = [15, 25, 35, 45, 55, 65, 75];

// Use filter() to keep only numbers greater than 50
const result = numbers.filter(number => number > 50);

// Print filtered result
console.log(`Greater than 50 is: ${result}`);


// map() Example
// Purpose: Convert test results into PASS / FAIL report

const testResults = [
  { testName: 'Login Test', passed: true },
  { testName: 'Signup Test', passed: false },
  { testName: 'Payment Test', passed: true }
];

// Use map() to transform each test result into a report-friendly format
const report = testResults.map(result => ({
  // Keep test name as-is
  testName: result.testName,

  // Convert boolean value into readable status
  status: result.passed ? 'PASS' : 'FAIL'
}));

// Print the final report
console.log(report);
