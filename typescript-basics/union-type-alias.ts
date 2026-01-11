/**
 * -------------------------------------------------
 * Type Aliases & Union Types – Practice Examples
 * -------------------------------------------------
 */


/* ---------- Product Type & Usage ---------- */

// Defines the structure of a single product
type Product = {
  id: number | string;
  name: string;
  price: number;
  inStock: boolean;
};

// List of available products
const productList1: Product[] = [
  { id: 101, name: "Laptop", price: 999.99, inStock: true },
  { id: "A102", name: "Smartphone", price: 499.99, inStock: false },
  { id: 103, name: "Tablet", price: 299.99, inStock: true }
];

// Another product collection
const productList2: Product[] = [
  { id: "B201", name: "Headphones", price: 199.99, inStock: true },
  { id: 202, name: "Smartwatch", price: 149.99, inStock: false }
];

// Log basic product details
console.log("Product List 1:", productList1[0].name, productList1[0].price);
console.log("Product List 2:", productList2[0].name, productList2[0].price);


/* ---------- Union Type & Type Narrowing ---------- */

// Input can be either string or number
type InputValue = number | string;

// Processes input safely based on its type
function processInput(value: InputValue): void {
  if (typeof value === "string") {
    console.log("Processing string input:", value.toUpperCase());
  } else {
    console.log("Processing numeric input:", value.toFixed(2));
  }
}

// Function usage examples
processInput("hello world");
processInput(123.456);


/* ---------- Order Status with String Literal Union ---------- */

// Allowed order lifecycle states
type OrderStatus = "created" | "shipped" | "delivered";

// Defines the structure of an order
type Order = {
  orderId: number | string;
  status: OrderStatus;
};

// Create an order instance
const order1: Order = {
  orderId: 1,
  status: "created"
};

// Log current order status
console.log(`Status: ${order1.status}`);
