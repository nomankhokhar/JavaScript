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
// console.log(lastName); // NomanAli


// -> Basic Operators

// Operators allow us to transform and combine values. They are symbols that perform operations on one or more operands.

// Math operators
// const now = 2037
// const ageNoman = now - 2000;
// const ageSarah = now - 2024;
// console.log(ageNoman, ageSarah);

// console.log(ageNoman * 2, ageNoman / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Noman';
// const lastName = 'Ali';
// console.log(firstName + ' ' + lastName);

// Assignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1 = 101
// x--; // x = x - 1 = 100
// console.log(x);

// Comparison operators
// console.log(ageNoman > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 2000 > now - 2024);

// -> PRECEDENCE OF OPERATORS

// const now = 2037
// const ageNoman = now - 2000;
// const ageSarah = now - 2024;

// console.log(now - 2000 > now - 2024);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// () has a higher precedence than the assignment operator
// const averageAge = (ageNoman + ageSarah) / 2;
// console.log(ageNoman, ageSarah, averageAge);

// -> Challenge #1

// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = markWeight / (johnWeight / johnHeight);
// const markHigherBMI = markBMI > johnBMI;

// console.log(markBMI, johnBMI, markHigherBMI);


// -> Strings and Template Literals

// Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.

// const firstName = 'Noman';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const noman = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!'; // old way

// const nomanNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`; // new way

// console.log(noman);
// console.log(nomanNew);

// console.log(`Just a regular string...`);

// console.log('String with \n\
// multiple \n\
// lines');


// console.log(`String with
// multiple
// lines`);


// -> Taking Decisions: if / else Statements

// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log('Sarah can start driving license 🚗');
// }else{
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years  :)`);
// }



// const birthYear = 1991;

// let century;
// if (birthYear <= 2000) {
//     century = 20;
// }else {
//     century = 21;
// }
// console.log(century);


// -> Challenge #2

// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = markWeight / (johnWeight / johnHeight);

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// }
// else {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
// }


// -> Type Conversion and Coercion

// Type conversion: manually convert from one type to another

// const inputYear = '1991';
// convert string to number is called type conversion
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Noman')); // NaN -> Not a Number
// console.log(typeof NaN); // number
// console.log(typeof typeof NaN); // string

// console.log(String(23), 23);

// Type coercion: JavaScript automatically converts types behind the scenes for us

// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3); // 10
// console.log('23' * '2'); // 46
// console.log('23' > '18'); // true
// console.log('23' < '18'); // false

// let n = '1' + 1; // '11'
// n = n - 1; // 10
// console.log(n); // 10

// -> Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean('Noman')); // true
// console.log(Boolean({})); // true
// console.log(Boolean('')); // false

// let money = 0;

// if (money) {
//     console.log("Don't spend it all ;)");
// }else{
//     console.log('You should get a job!');
// }

// let height = 0.1;

// if (height) {
//     console.log('YAY! Height is defined');
// }
// else {
//     console.log('Height is Undefined');
// }


// -> Equality Operators: == vs. ===

// == does type coercion
// === does not do type coercion

// const age = 18;
// if (age === 18) console.log('You just became an adult (strict)');
// if (age == 18) console.log('You just became an adult (loose)');

// const favorite = Number(prompt('What is your favorite number?'));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) { // '23' == 23 -> true
//     console.log('Cool! 23 is an amazing number!');
// }else if (favorite == 7) { // '7' === 7 -> false7
//     console.log('7 is also a cool number');
// }else{
//     console.log('Number is not 23 or 7');
// }

// if (favorite !== 23) console.log('Why not 23?');

// -> Logical Operators

// Logical operators are used to determine the logic between variables or values.

// const hasDriverLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriverLicense && hasGoodVision); // AND
// console.log(hasDriverLicense || hasGoodVision); // OR
// console.log(!hasDriverLicense); // NOT


// if (hasDriverLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// }else{
//     console.log('Someone else should drive...');
// }


// -> The Switch Statement

// const day = 'thursday';

// switch(day){
//     case 'monday':
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('Not a valid day!'); 
// }


// -> Statements and Expressions

// Expression: a piece of code that produces a value

// 3 + 4 // 7
// 1991 
// true && false && !false // false

// Statement: a bigger piece of code that does not produce a value on itself

// if (23 > 10) {
//     const str = '23 is bigger';
//     console.log(str);
// }

// const me = 'Noman';
// console.log(`I'm ${2024 - 2002} years old ${me}`);

// -> The Conditional (Ternary) Operator

// const age  = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

// const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
// console.log(drink);

// -> End of Fundamental Part 1 Module