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

// -> Hoisting

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
