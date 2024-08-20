'use strict';

// -> High level Overview of JavaScript

// High level
// Garbage collected
// Interpreted or just-in-time compiled
// Multi-paradigm
// Prototype-based object-oriented
// First-class functions
// Dynamic typing
// Single-threaded
// Non-blocking event loops

// -> Multi Paradigm
//  Procedural
//  Object-oriented Programming
//  Functional

// -> JavaScript Engine

// JIT mean
//  Just-in-time compilation meaning that the JavaScript engine will compile the code on the fly, right before executing it.

// -> Execution Context and Call Stack

//  The environment in which JavaScript code is executed, which contains all the necessary information for the code to be executed.

// -> Execution Context and Call Stack

// Example of Execution Context

// const name = 'Jonas';

// function first() {
//   let a = 1;
//   const b = second(7, 9);
//   a = a + b;
//   return a;
// }

// function second(x, y) {
//   var c = 2;
//   return c;
// }

// const x = first();
// console.log(x);

// -> Above Code Execution Context is

// {
//  name = 'Jonas';
//  first = function() {...};
//  second = function() {...};
//  x = undefined;
// }

// Another Example of Execution Context

// const a = 'Nomal Ali';
// first();

// function first() {
//   const b = 'Hello!';
//   second();

//   function second() {
//     const c = 'Hi!';
//     third();
//   }
// }

// function third() {
//   const d = 'Hey!';
//   // c is not defined
//   // b is not defined

//   // they are not in the scope chain
//   // reference error
//   console.log(d + c + b + a);
// }

// Above Code Execution Context is
// {
//  a = 'Jonas';
//  first = function() {...};
//  third = function() {...};
// }

// -> Scoping and Scope Chain

//  Lexical Scoping
//  Lexical scoping means that a variable defined in one part of your program might not be accessible everywhere in your program.

// There is three type of scoping in JavaScript

// 1. Global Scope -> Variables that are defined outside of any function or block
// const Name = 'Noman Ali';
// 2. Function Scope -> Variables that are defined inside a function
// function myFunction() {
//   const myName = 'Noman Ali';
// }
// 3. Block Scope -> Variables that are defined inside a block
// only let and const are block scope
// if (true) {
//   const xD = 'Noman Ali';
// }

//  Scope Chain Example

// const myName = 'Noman Ali';

// function first() {
//   const age = 30;

//   if (age >= 30) {
//     const decade = 3;
//     var millenial = true;
//   }

//   function second() {
//     const job = 'teacher';
//     console.log(`${myName} is a ${age} years old ${job}`);
//   }
//   second();
// }

// first();

// Above is the example of Scope Chain
// 1. myName is in the Global Scope
// 2. age is in the first() function scope
// 3. decade and millenial is in the if block scope
// 4. job is in the second() function scope

// -> Variable Environment Hoisting and The TDZ (temporal dead zone)

// see -> Hoisting.png

// Temporary Dead Zone

// const myName = 'Noman Ali';

// if (myName === 'Noman Ali') {
//   console.log(`Noman Ali ${job}`);
//   const age = 2037 - 1991;
//   console.log(age);

//   const job = 'teacher';
//   console.log(x);
// }

// Above code will give you a reference error because of Temporal Dead Zone

// job is in the Temporal Dead Zone
// x Reference Error: x is not defined

// -> Hoisting and TLD in Practice

// ---------------------------- variable hoisting

// console.log(me); // undefined
// console.log(job); // Reference Error TLD
// console.log(year); // Reference Error TLD

// var me = 'Noman Ali';
// let job = 'teacher';
// const year = 1991;

// ---------------------------- function hoisting

// console.log(addDecl(2, 3)); // 5
// console.log(addExpr(2, 3)); // Reference Error
// console.log(addArrow(2, 3)); // addArrow is not a function because addArrow is Hoisted but next arrow function is not hoisted we can access it before the declaration only addArrow name

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// -> Example of Hoisting

// All product deleted because numProducts is undefined

// console.log(numProducts); // undefined
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1; // Global window object because it is var -> window.x
// let y = 2;
// const z = 3;

// console.log(x === window.x); // true
// console.log(y === window.y); // false
// console.log(z === window.z); // false

// -> The this Keyword

// Methods -> this keyword points to the object that is calling the method
// const person = {
//   name: 'Noman Ali',
//   age: 30,
//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };

// person.greet();

// Simple function call -> this keyword points to the window object
// function showName() {
//   console.log(this); // Points to `window` object in browsers not in restrict mode
// }

// showName();

// Arrow function -> this keyword points to the parent scope
// const personMan = {
//   name: 'Noman Ali',
//   greet: function () {
//     const arrowFunc = () => {
//       console.log(this.name);
//     };
//     arrowFunc();
//   },
// };

// personMan.greet(); // "Noman Ali"

// Event Listener -> this keyword points to the DOM element that the handler is attached to
// const button = document.querySelector('button');

// button.addEventListener('click', function () {
//   console.log(this);
// });

// button.addEventListener('click', () => {
//   console.log(this);
// });

// -> The this Keyword in Practice

// console.log(this); // window object

// Simple function call
// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this); // undefined
// };

// calcAge(1991);

// Arrow function

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this); // window object
// };

// calcAgeArrow(1991);

// Method

// const noman = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this); // this points to the object that is calling the method -> noman object
//     console.log(2037 - this.year);
//   },
// };

// noman.calcAge();

// Method Borrowing

// const matilda = {
//   year: 1991,
// };

// matilda.calcAge = noman.calcAge;
// matilda.calcAge(); // this points to the object that is calling the method -> matilda object

// const f = noman.calcAge;
// f(); // TypeError: Cannot read property 'year' of undefined

// -> Regular Functions vs. Arrow Functions

// const noman = {
//   firstName: 'Noman',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//     // Solution 1
//     const self = this; // self or that
//     const isMillenial = function () {
//       console.log(self);
//       console.log(self.year >= 1981 && self.year <= 1996);
//     };

//     isMillenial();

//     // Solution 2

//     const isMillenialArrow = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenialArrow();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// noman.calcAge();
// noman.greet(); // Hey undefined

// Arguments Keyword in Regular Functions

// const addExpr = function (a, b) {
//   console.log(arguments); // arguments feature is only available in regular functions not in arrow functions
// };

// addExpr(2, 5, 8, 12); // 7

// Arguments keyword in Arrow Function

// const addArrow = (...args) => {
//   console.log(args); // [2, 5, 8, 12]
// };

// console.log(addArrow(2, 5, 8, 12)); // 7

// -> Primitives vs. Objects (Primitive vs. Reference Types)

// Object are stored in the heap and the reference to the object is stored in the call stack
// Primitives are stored in the call stack itself

// Primitives
//  Number
//  String
//  Boolean
//  Undefined
//  Null
//  Symbol
//  BigInt

// Objects

//  Object Literals
//  Arrays
//  Functions
// Many more...

// Primitives
// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age); // 31
// console.log(oldAge); // 30

// Objects
// const me = {
//   name: 'Noman',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;

// console.log('Friend:', friend); // 27
// console.log('Me:', me); // 27

// -> Primitives vs. Objects in Practice

// Primitive Types
let lastName = 'Noman Ali';
let oldLastName = lastName;
lastName = 'Khan';

console.log(lastName); // Khan
console.log(oldLastName); // Noman Ali

// Reference Types
const Noman = {
  firstName: 'Noman',
  lastName: 'Ali',
  age: 27,
};

const marriedNoman = Noman;
marriedNoman.lastName = 'Khan';

console.log('Before marriage:', Noman); // Khan
console.log('After marriage:', marriedNoman); // Khan

// Copying Objects

const Noman2 = {
  firstName: 'Noman',
  lastName: 'Ali',
  age: 27,
  family: ['Alice', 'Bob'],
};

const NomanCopy = Object.assign({}, Noman2); // Shallow copy mean copy only internal properties not nested objects like array in the above example
NomanCopy.lastName = 'Khan';

NomanCopy.family.push('Null');
NomanCopy.family.push('Ptr');

console.log('Before marriage:', Noman2); // Khan
console.log('After marriage:', NomanCopy); // Khan
