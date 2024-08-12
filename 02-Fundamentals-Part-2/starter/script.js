// -> Activating the Strict mode
// Whole script strict mode syntax

'use strict';

// let hasDriverLicense = false;
// const passTest = true;

// if(passTest) hasDriverLicense = true;
// if(hasDriverLicense) console.log('I can drive!');

// const interface = 'Audio'; // -> Uncaught SyntaxError: Unexpected strict mode reserved word
// const private = 534; // -> Uncaught SyntaxError: Unexpected strict mode reserved word

// -> Functions in JavaScript

// function logger() {
//     console.log('My name is Jonas');
// }

// Calling / running / invoking function

// logger(); // -> My name is Jonas
// logger(); // -> My name is Jonas
// logger(); // -> My name is Jonas

// -> Function with parameters

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// function follow the principle of DRY: Don't Repeat Yourself

// const appleJuice = fruitProcessor(5, 0); // -> 5 0
// console.log(appleJuice); // -> Juice with 5 apples and 0 oranges.
// console.log(fruitProcessor(5, 0)); // -> 5 0 Juice with 5 apples and 0 oranges.

// const appleOrangeJuice = fruitProcessor(2, 4); // -> 2 4
// console.log(appleOrangeJuice); // -> Juice with 2 apples and 4 oranges.


// -> Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

const age1 = calcAge1(1991);
console.log(age1); // -> 46

// Function expression
const calcAge2 = function (birthYear) {
    const age = 2037 - birthYear;
    return age;
}

const age2 = calcAge2(1991);
console.log(age2); // -> 46