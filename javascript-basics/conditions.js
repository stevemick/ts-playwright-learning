0/*
Clean Conditional Examples
  Topics:
  - if / else
  - else if
  - Logical operators
*/

// Developer role check

const developerRole = 'frontend';

if (developerRole === 'frontend') {
  console.log('You are a Frontend Developer.');
} else {
  console.log('You are not a Frontend Developer.');
}

// Tester role check
const testerRole = 'Automation Tester';

if (testerRole === 'Automation Tester') {
  console.log('You are an Automation Tester.');
} else if (testerRole === 'Manual Tester') {
  console.log('You are a Manual Tester.');
} else {
  console.log('Role not recognized.');
}

// Experience level check
const experienceYears = null;

if (experienceYears == null) {
  console.log('Experience data not provided.');
}
else if (experienceYears >= 10) {
  console.log('You have advanced experience.');
} 
else if (experienceYears >= 5) {
  console.log('You have intermediate experience.');
} 
else {
  console.log('You are a beginner.');
}
