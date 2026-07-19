let firstName: string = "John";
let lastName: string = "Doe";
let age: number = 30;

let x: undefined = undefined;
let z: null = null;

console.log(
  `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`,
);

const json = JSON.parse('{"firstName": "John", "lastName": "Doe", "age": 30}');

console.log(typeof json);

// TODO: TS Arrays
// const names: readonly string[] = ['Dylan'];

// names.push('Jack');

// console.log(names[0]);

// TODO: TS Tuples
// let tuple: [string, number];
// tuple = ['hello', 3];
// console.log(tuple);

// named tuple
// let graph: [x: number, y: number] = [3.30, 4.56];

// distributed tuple
// let a: [string, number] = ['hello', 3];
