// Boolean Types
let isActive = true;
let hasPermission = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;       // Hexadecimal
let binary: number = 0b1010;     // Binary
let octal: number = 0o744;      // Octal
let float: number = 3.14;      // Floating point

// String
let color: string = "blue";
let fullName: string = 'John Doe';
let age: number = 30;
let sentence: string = `Hello, my name is ${fullName} and I'll be ${age + 1} next year.`;


// BigInt type example (ES2020+)
const hugeNumber = BigInt('9007199254740991');

// Output the value
console.log(hugeNumber);


//Code below will not work unless specified in tsconfig.json
//const bigNumber: bigint = 9007199254740991n; Will not work unless 
//console.log(bigNumber);

// Symbol

const uniqueKey: symbol = Symbol('description');
const obj = {
  [uniqueKey]: 'This is a unique property'
};
console.log(obj[uniqueKey]); // "This is a unique property"