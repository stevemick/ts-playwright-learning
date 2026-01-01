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


for(let i =0; i<=20;i++){
  if(i%5===0){
    continue;
  }
  console.log(i)
}


const statuses = ['PASS', 'FAIL', 'NOT_EXECUTED'];

for (const result of statuses) {
  if (result === 'FAIL') {
    console.log('Test suite failed. Stopping further checks.');
    break;
  }
}

const users = [
  {name: 'Steve', role: 'admin'},
  {name: 'Lucy', role: 'user'},
  {name: 'Mark', role: 'guest'},
  {name: 'Anna', role: 'admin'}];

for (const user of users) {
  if (user.role === 'admin'){
    console.log(`Admin detected → ${user.name}`);
  }
}