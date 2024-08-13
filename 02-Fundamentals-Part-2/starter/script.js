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
// function calcAge1(birthYear) {
//     const age = 2037 - birthYear;
//     return age;
// }

// const age1 = calcAge1(1991);
// console.log(age1); // -> 46

// Function expression is also known as anonymous function
// const calcAge2 = function (birthYear) {
//     const age = 2037 - birthYear;
//     return age;
// }

// const age2 = calcAge2(1991);
// console.log(age2); // -> 46

// -> Arrow functions
// () => {}

// Single line arrow function 
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);

// console.log(age3); // -> 46

// Multiple line arrow function with multiple parameters
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// -> Function calling other function

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3)); // -> 2 3 Juice with 8 apples and 12 oranges.


// -> Reviewing Functions

// Function declaration
// Function expression
// Arrow function

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const retirement = (age) => 65 - age;

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = calcAge(birthYear);
//     const retirementAge = retirement(age);
//     if(retirement > 0) {
//         return `${firstName} retires in ${retirementAge} years`;
//     } else {
//         return `${firstName} has already retired`;
//     }
// }

// console.log(yearsUntilRetirement(1991, 'Noman Ali')); // -> Noman Ali retires in 150 years

// console.log(yearsUntilRetirement(1950, 'Ali Khan')); // -> Mike has already retired

// Challenge 1

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;


// const checkWinner = function (avgDolphins, avgKoalas) {
//     if(avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if(avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log('No team wins...');
//     }
// }



// Test data 1
// let avgDolphins = calcAverage(44, 23, 71);
// let avgKoalas = calcAverage(65, 54, 49);

// checkWinner(avgDolphins, avgKoalas);

// Test data 2
// avgDolphins = calcAverage(85, 54, 41);
// avgKoalas = calcAverage(23, 34, 27);

// checkWinner(avgDolphins, avgKoalas);


// -> Introduction to Arrays

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = "Peter";

// const friends = ['Michael', 'Steven', 'Peter'];

// console.log(friends);

// Index 4 to 98 will be undefined
// let years = new Array(1991, 1984, 2008, 2020);
// years[100] = 100

// console.log(years);

// console.log(friends[0]); // -> Michael
// console.log(friends[2]); // -> Peter

// console.log(friends.length); // -> 3
// console.log(friends[friends.length - 1]); // -> Peter

// Exercise
// const calcAge = function (birthyear) {
//     return 2037 - birthyear;
// }

// years = [1990, 1967, 2002, 2010, 2018];
// for (let i = 0; i < years.length; i++) {
//     console.log(calcAge(years[i]));
// }

// -> Basic Array Operations (Methods)

// const friends = ['Michael', 'Steven', 'Peter'];

// push method also returns the length of the arrays
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// pop method also returns the last element of the arrays
// const popped = friends.pop();
// console.log(friends);
// console.log(popped);


// unshift method also returns the length of the arrays
// const newLen = friends.unshift('John');
// console.log(friends);
// console.log(newLen);


// shift method also returns the first element of the arrays
// const lastEle = friends.shift();
// console.log(friends);
// console.log(lastEle);

// k-sensitive indexOf method returns the index of the element in the arrays
// console.log(friends.indexOf('Steven')); // -> 1
// console.log(friends.indexOf('peter')); // -> -1

// includes method returns the boolean value if the element is present in the arrays 
// Note : Also check the type of the element
// console.log(friends.includes('Steven')); // -> true
// console.log(friends.includes('peter')); // -> false

// if (friends.includes('Steven')) {
//     console.log('You have a friend called NomanAli');
// }

// -> Introduction to Objects

// const nomanArray = [
//     'Noman',
//     'Ali',
//     2021 - 1991,
//     'developer',
//     ['Michael', 'Peter', 'Steven']
// ];

// Object literal syntax
// const nomanObject = {
//     firstName: 'Noman',
//     lastName: 'Ali',
//     age: 2021 - 1991,
//     job: 'developer',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(nomanObject.friends);

// -> Dot vs. Bracket Notation

// const nomanObject = {
//     firstName: 'Noman',
//     lastName: 'Ali',
//     age: 2021 - 1991,
//     job: 'developer',
//     friends: ['Michael', 'Peter', 'Steven'],
//     11 : 'eleven'
// };

// nomanObject.location = 'Pakistan';
// nomanObject['loc'] = 'Pakistan Territory';

// console.log(nomanObject);
// console.log(nomanObject.firstName);
// console.log(nomanObject['lastName']);

// const nameKey = 'Name';
// console.log(nomanObject['first' + nameKey]);
// console.log(nomanObject['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Noman? Choose between firstName, lastName, age, job, and friends');

// if (nomanObject[interestedIn]) {
//     console.log(nomanObject[interestedIn]);
// }
// else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }

// delete nomanObject.location;
// console.log(nomanObject);


// -> Object Methods

// const nomanObject = {
//     firstName: 'Noman',
//     lastName: 'Ali',
//     birthYear: 1991,
//     job: 'developer',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriverLicense: true,

//     function expressions

//     calcAge: function (birthYear) {
//         return 2021 - birthYear;
//     }

//     calcAge: function () {
//         return 2021 - this.birthYear;
//     }

//     calcAge: function () {
//         // this.age is the property of the object we are creating
//         this.age = 2021 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`;
//     }
// };

// console.log(nomanObject.getSummary());

// Challenge 3

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.BMI = this.mass / this.height ** 2;
//         return this.BMI;
//     }
// }

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.BMI = this.mass / this.height ** 2;
//         return this.BMI;
//     }
// }

// mark.calcBMI();
// john.calcBMI();

// if (mark.BMI > john.BMI) {
//     console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI})`);
// } else if (john.BMI > mark.BMI) {
//     console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI})`);
// } else {
//     console.log('Both have the same BMI');
// }


// -> Iteration: The for Loop

// for (let i = 1; i <= 10; i = i + 1){
//     console.log(`Lifting weights repetition ${i}`)
// }

// -> Looping Arrays, Breaking and Continuing

// const nomanArray = [
//     'Noman',
//     'Ali',
//     2021 - 1991,
//     'developer',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];
// const types = [];

// for (let i = 0; i < nomanArray.length; i++) {
//     console.log(nomanArray[i], typeof nomanArray[i]);

//     // Both are same

//     // types[i] = typeof nomanArray[i];
//     types.push(typeof nomanArray[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2021 - years[i]);
// }

// console.log(ages);

// continue and break

// console.log('--- ONLY STRINGS ---');
// for (let i = 0; i < nomanArray.length; i++) {
//     if (typeof nomanArray[i] !== 'string') continue;

//     console.log(nomanArray[i], typeof nomanArray[i]);
// }

// console.log('--- BREAK WITH NUMBER ---');
// for (let i = 0; i < nomanArray.length; i++) {
//     if (typeof nomanArray[i] === 'number') break;

//     console.log(nomanArray[i], typeof nomanArray[i]);
// }


// -> Looping Backwards and Loops in Loops

// const nomanArray = [
//     'Noman',
//     'Ali',
//     2021 - 1991,
//     'developer',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// for (let i = nomanArray.length - 1; i >= 0; i--) {
//     console.log(i, nomanArray[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`---- Starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}`);
//     }
// }

// -> The while Loop

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weights repetition ${rep}`);
//     rep++;
// }


// Math.random() -> 0 to 1
// Math.trunc() -> remove the decimal part
// let dice = Math.trunc(Math.random() * 6) + 1; // -> 1 to 6

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end...');
// }

// -> Coding Challenge #4

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// }

// const bills = [125, 555, 44];
// const tips = [];
// const total = [];

// for (let i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]));
//     const totalBill = bills[i] + tips[i];
//     total.push(totalBill);
// }

// console.log(bills, tips, total);