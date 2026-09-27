// Explicit type annotations
// String
let greeting: string = "Hello, TypeScript!";

// Number
let userCount: number = 42;

// Boolean
let isLoading: boolean = true;

// Array of numbers
let scores: number[] = [100, 95, 98];

// Output the values
console.log(greeting);
console.log(userCount);
console.log(isLoading);
console.log(scores);

// Function with explicit parameter and return types
function welcome(name: string): string {
  return `Welcome, ${name}!`;
}

// TypeScript will ensure you pass the correct argument type
console.log(welcome("Alice")); // OK
// welcome(42); // Error: Argument of type '42' is not assignable to parameter of type 'string'