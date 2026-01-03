// ARRAY EXAMPLE
// Purpose: Print numbers greater than 20 from an array

const numbers = [10, 20, 30, 40, 50];

// Loop through each number in the array
for (const number of numbers) {
  // Check if the number is greater than 20
  if (number > 20) {
    console.log(number);
  }
}

const result = numbers.filter(number => number > 20);



const employees = [
  { name: 'Alice', department: 'Developer', experience: 3 },
  { name: 'Bob', department: 'QA', experience: 2 },
  { name: 'Steve', department: 'QA', experience: 5 }
];

const level = employees.map(emp => {
  if (emp.experience < 3) {
   console.log(emp,' Level: Junior');
  } else if (emp.experience >= 3) {
    console.log(emp,' Level: Senior');
  }
});
console.log(level);