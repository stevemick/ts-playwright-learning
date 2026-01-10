// Typed Array Example

// Array that stores only numeric prices
const prices: number[] = [9.99, 19.99, 29.99];

// Adding a valid numeric value
prices.push(39.99);
console.log("Prices:", prices);

// Typed Object Example

// Employee object with a fixed structure
// `id` is readonly and cannot be modified
const employee: {
  readonly id: number;
  name: string;
  department: string;
  email?: string;
} = {
  id: 1,
  name: "John Doe",
  department: "Engineering"
};

// Safely check optional property before using it
if (employee.email) {
  console.log("Employee Email:", employee.email);
} else {
  console.log("Employee Email not provided");
}

// Array of Objects Example

// List of products with consistent structure
const products: {
  id: number;
  name: string;
  inStock: boolean;
}[] = [
  { id: 101, name: "Laptop", inStock: true },
  { id: 102, name: "Smartphone", inStock: false },
  { id: 103, name: "Tablet", inStock: true }
];

// Loop through products and display stock status
products.forEach(product => {
  const stockStatus = product.inStock ? "Available" : "Out of Stock";
  console.log(`${product.name} - ${stockStatus}`);
});