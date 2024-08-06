// JavaScript is a high-level, object-oriented, multi-paradigm programming language.
// JavaScript is a single-threaded language, meaning it can only execute one task at a time.

// Multi-paradigm programming language: JavaScript supports multiple programming paradigms, including object-oriented, imperative, and declarative programming styles.

// Imperative vs declarative programming
// Imperative programming: we tell the computer what to do and how to do it
// Declarative programming: we tell the computer what to do and the computer figures out how to do it

// Dynamic -> React, Angular, Vue
// Static -> TypeScript, Flow
// Backend -> Node.js
// Native -> React Native, NativeScript
// Desktop -> Electron, NW.js

// Do not use Person as a variable name because it is use Object-Oriented Programming 

// -> Variables and Values

// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// console.log('Jonas');
// console.log(23);

// let firstName = 'Noman Ali';
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let myFirstJob = 'Programmer';
// let $function = 22
// let name = 'Noman Ali';
// const PI = 3.1415;

// let myCurrentJob = 'Teacher';

// console.log(myFirstJob);

// -> Data Types

// there are 7 data types in JavaScript that are primitive data types
// 1. Number: Floating point numbers, used for decimals and integers
// 2. String: Sequence of characters, used for text
// 3. Boolean: Logical type that can only be true or false
// 4. Undefined: Value taken by a variable that is not yet defined ('empty value')
// 5. Null: Also means 'empty value'
// 6. Symbol (ES6): Value that is unique and cannot be changed
// 7. BigInt (ES11/2020): Larger integers than the Number type can hold

// JavaScript has dynamic typing: We do not have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically.

// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

// console.log(typeof true);
// console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Noman Ali');

// javaScriptIsFun = 'YES!';

// console.log(typeof javaScriptIsFun);

// let year;
// console.log(year); // undefined because we do not define the value of year
// console.log(typeof year); // undefined is a data type

// year = 1991;
// console.log(typeof year); // number

// console.log(typeof null); // object


// -> let, const and var

// let: is a new way of declaring variables introduced in ES6. It is block-scoped.
// const: is a new way of declaring variables introduced in ES6. It is block-scoped.
// var: is the old way of declaring variables. It is function-scoped. 

// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990; // Uncaught TypeError: Assignment to constant variable.
// const job;

// var job = 'programmer';
// job = 'teacher';

// lastName = 'NomanAli';
// console.log(lastName);