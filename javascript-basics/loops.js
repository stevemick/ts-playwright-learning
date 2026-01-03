/*
  JavaScript Loops
  Topics covered:
  - for loop
  - for...of & for...in loop
  - while loop
  - break and continue
*/

// Task A: Skip multiples of 2
for (let i = 1; i <= 8; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

// Task B: Stop execution on failure
const statuses = ['PASS', 'FAIL', 'NOT_EXECUTED'];

for (const status of statuses) {
  if (status === 'FAIL') {
    console.log('Test suite failed. Stopping further checks.');
    break;
  }
}

// Task C: Print admin users
const users = [
  { name: 'Steve', role: 'admin' },
  { name: 'Lucy', role: 'user' },
  { name: 'Mark', role: 'guest' },
  { name: 'Anna', role: 'admin' }
];

// Using for...of to find admin users
for (const user of users) {
  if (user.role === 'admin') {
    console.log(`Admin user found: ${user.name}`);
  }
}
// Alternative: Using for...in to print user data
for (const user_data in users){
  console.log(users[user_data]);
}

// Task D: While loop to print numbers until 10
let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}