// Application name (string type)
const appName: string = "Zomato Clone";

// Application version (number type)
let appVersion: number = 1.0;

// Flag indicating application readiness
let isReady: boolean = true;

// Response can be of unknown type
let response: unknown = "This is a response";

// Safely handle the response after type checking
if (typeof response === "string") {
  console.log(response.toUpperCase());
}

// Log application details
console.log(`App Name: ${appName}`);
console.log(`App Version: ${appVersion}`);
console.log(`Is App Ready? ${isReady}`);