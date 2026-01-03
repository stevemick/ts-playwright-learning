// OBJECT EXAMPLE
// Purpose: Print all keys and values of an object

const product = {
  name: 'Laptop',
  price: 80000,
  inStock: true,
};

// Loop through object keys using for...in
for (const key in product) {
  // key → property name and product[key] → property value
  console.log(`${key}: ${product[key]}`);
}