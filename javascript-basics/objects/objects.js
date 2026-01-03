// OBJECT EXAMPLE
// Purpose: Print all keys and values of an object

const product = {
  name: 'Laptop',
  price: 80000,
  inStock: true,
};

// Loop through object keys using for...in
for (const key in product) {
  // key   → property name
  // product[key] → property value
  console.log(`${key}: ${product[key]}`);
}

// ARRAY OF OBJECTS EXAMPLE
// Purpose: Find and print employees from QA department

const employees = [
  { name: 'Alice', department: 'Developer' },
  { name: 'Bob', department: 'UI/UX Designer' },
  { name: 'Steve', department: 'QA' },
];

// Loop through each employee object
for (const employee of employees) {
  // Check department condition
  if (employee.department === 'QA') {
    console.log(`QA Employee: ${employee.name}`);
  }
}
