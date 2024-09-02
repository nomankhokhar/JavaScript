'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  // ES6 Enhanced Object Literals
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} ${this.starterMenu[mainIndex]} and will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// -> String Methods Practice

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
}
// -> Working with Strings - Part 1

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]); // A
// console.log(plane[1]); // 3
// console.log(plane[2]); // 2
// console.log('B737'[0]); // B

// console.log(airline.length); // 16
// console.log('B737'.length); // 4

// console.log(airline.indexOf('r')); // 6
// console.log(airline.lastIndexOf('r')); // 10
// console.log(airline.indexOf('Portugal')); // 8

// console.log(airline.slice(4)); // Air Portugal
// console.log(airline.slice(4, 7)); // Air
// console.log(airline.slice(0, airline.indexOf(' '))); // TAP

// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal
// console.log(airline.slice(-2)); // al
// console.log(airline.slice(1, -1)); // AP Air Portuga

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got the middle seat');
//   } else {
//     console.log('You got lucky');
//   }
// };

// checkMiddleSeat('11B'); // You got the middle seat
// checkMiddleSeat('23C'); // You got lucky
// checkMiddleSeat('3E'); // You got the middle seat

// console.log(new String('jonas')); // [String: 'jonas']

// -> Working with Strings - Part 2

// console.log(airline.toLowerCase()); // tap air portugal
// console.log(airline.toUpperCase()); // TAP AIR PORTUGAL
// console.log('Jonas'.toUpperCase()); // JONAS

// Fix capitalization in name
// const passenger = 'nOmaN';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect); // Noman

// Comparing emails
// const email = 'hello@noman.com';
// const loginEmail = '      hello@noman.Com \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);
// console.log(email === trimmedEmail); // true

// Replace
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS); // 288.97$

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

// Regular Expression
// console.log(announcement.replace(/door/g, 'gate'));

// Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320')); // true
// console.log(plane.includes('Boeing')); // false
// console.log(plane.startsWith('Airb')); // true

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the New Airbus family');
// }

// Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not allowed on board');
//   } else {
//     console.log('Welcome aboard');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');

// -> Working with Strings - Part 3

// console.log('a+very+nice+string'.split('+')); // [ 'a', 'very', 'nice', 'string' ]
// console.log('Noman Ali'.split(' ')); // [ 'Noman', 'Ali' ]
// console.log('Noman Ali'.split('')); // [ 'N', 'o', 'm', 'a', 'n', ' ', 'A', 'l', 'i' ]

// const [firstName, lastName] = 'Noman Ali'.split(' ');
// console.log(firstName, lastName); // Noman Ali

// const fullName = ['Mr.', 'Noman', 'Ali'].join(' '); // Mr. Noman Ali
// console.log(fullName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];
//   for (const n of names) {
//     const Capitalize = n[0].toUpperCase() + n.slice(1);
//     namesUpper.push(Capitalize);
//   }
//   return namesUpper.join(' ');
// };

// console.log(capitalizeName('noman ali'), capitalizeName('ali younas')); // Noman Ali Ali Younas

// Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(35, '+')); // +++++++Go to gate 23!++++++++

// Credit Card Printing Example
// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(43378463864647384n)); // ************7384
// console.log(maskCreditCard('43378463864647384')); // ************7384

// Repeat
// const message2 = 'Bad weather... All Departures Delayed... ';
// console.log(message2.repeat(5));

// const planesInline = function (n) {
//   console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
// };

// planesInline(5); // There are 5 planes in line ✈✈✈✈✈
// planesInline(3); // There are 3 planes in line ✈✈✈
// planesInline(12); // There are 12 planes in line

// -> Which Data Structure to Use?

// Array or Sets
// Objects or Maps

// 1 Arrays: Ordered, iterable, can have any data type, can contain objects, can contain arrays
// 2 Sets: No duplicates, iterable, no indexes, can contain any data type, can contain objects, can contain arrays
// 3 Objects: Key-value pairs, keys are strings, values can be any data type, can contain objects, can contain arrays
// 4 Maps: Key-value pairs, keys can be any data type, values can be any data type, iterable, high-performance, easy to iterate, easy to compute size

// -> Maps Iterators
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct'],
// ]);

// Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));

// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt('Your answer'));
// console.log(question.get(question.get('correct') === answer));

// Convert map to array
// console.log([...question]);
// console.log([...question.keys()]);
// console.log([...question.values()]);
// console.log([...question.entries()]);

// -> Maps Fundamentals

// const rest = new Map();
// rest.set('name', 'Noman Ali');
// rest.set(1, 'Multan, Pakistan');
// rest.set(2, 'Lahore, Pakistan');
// console.log(rest);

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// console.log(rest);
// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(false));
// console.log(rest.get(1));

// const time = 21;
// const isOpen = rest.get('open') <= time && time < rest.get('close');
// console.log(rest.get(isOpen));

// console.log(rest.has('categories'));
// rest.delete(2);
// // set [1, 2] is not same as get [1, 2] because it is an array
// const arr = [1, 2]; // same address in memory
// rest.set(arr, 'Test');
// console.log(rest.get(arr));

// rest.set(document.querySelector('h1'), 'Heading');

// console.log(rest);
// console.log(rest.size);
// rest.clear();

// -> Sets

// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(orderSet); // Set(3) { 'Pasta', 'Pizza', 'Risotto' }
// console.log(orderSet.size); // 3
// console.log(orderSet.has('Pizza')); // true
// console.log(orderSet.has('Bread')); // false

// orderSet.add('Garlic Bread');
// orderSet.delete('Risotto');
// orderSet.clear();
// console.log(orderSet); // Set(0) {}
// console.log(new Set('iAlii')); // Set(3) { 'A', 'l', 'i' }

// for (const order of orderSet) console.log(order);

// Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique); // [ 'Waiter', 'Chef', 'Manager' ]

// -> Looping Objects: Object Keys, Values, and Entries
// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

// Property Names
// const properties = Object.keys(openingHours);
// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// Property Values

// const values = Object.values(openingHours);
// console.log(values);

// Entire Object
// const entries = Object.entries(openingHours);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// -> Optional Chaining (?.)
// console.log(restaurant.openingHours.mon?.open); // undefined
// console.log(restaurant.openingHours?.mon?.open); // undefined

// Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// Methods Checking in ES6
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays

// const users = [{ name: 'Ali', email: 'aliyounas084@gmail.com' }];
// console.log(users[0]?.name ?? 'User array empty');

// if (users.length > 0) {
//   console.log(users[0].name);
// } else {
//   console.log('User array empty');
// }

// -> Enhanced Object Literals

// you remove the object from inside the Object and make it separate like above line 29 this is object literal

// Also, we can write function like this without function keyword
// orderDelivery(){}; // This is called method

// -> The for-of Loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
// -> Short Circuiting (&& and ||)

// console.log('------------OR------------');
// console.log(3 || 'Jonas'); // 3
// console.log('' || 'Jonas'); // Jonas
// console.log(true || 0); // true
// console.log(undefined || null); // null
// console.log(null || undefined); // undefined
// console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello
// console.log(undefined || 0 || '' || null); // null

// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1); // 10

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2); // 10

// console.log('------------AND------------');
// console.log(0 && 'Jonas'); // 0
// console.log(7 && 'Jonas'); // Jonas
// console.log('Hello' && 23 && null && 'Jonas'); // null
// console.log('Hello' && 23 && 'Jonas'); // Jonas
// console.log('Hello' && 23); // 23

// Practical Example

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'onion');
// }
// Above and Below are same
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'onion');

// -> Nullish Coalescing Operator (??)

// Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect); // 10

// -> Logical Assignment Operators

// const rest1 = {
//   name: 'Ali',
//   numGuests: 20,
// };

// const rest2 = {
//   name: 'Noman',
//   owner: 'Khan',
// };

// OR Operator

// rest1.numGuests = rest2.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// Above and Below are same
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// console.log(rest2); // { name: 'Noman', owner: 'Khan', num Guests: 10 }
// console.log(rest1); // { name: 'Ali', num Guests: 10 }

// Nullish Coalescing Operator

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// console.log(rest1); // { name: 'Ali', num Guests: 20 }
// console.log(rest2); // { name: 'Noman', owner: 'Khan', num Guests: 10 }

// rest1.owner = rest2.owner ?? 'Ali';
// rest2.owner = rest2.owner ?? 'Ali';
// console.log(rest1); // { name: 'Ali', num Guests: 20, owner: 'Khan' }
// console.log(rest2); // { name: 'Noman', owner: 'Khan', num Guests: 10 }

// AND Operator

// rest1.owner &&= 'Ali';
// rest2.owner &&= 'Ali';
// console.log(rest1); // { name: 'Ali', num Guests: 20, owner: 'Ali' }
// console.log(rest2); // { name: 'Noman', owner: 'Ali', num Guests: 10 }

// -> Rest Pattern and Parameters
// Rest Pattern: Collects multiple elements and condenses them into an array like structure (...args) on LEFT side of = operator

// Parameters: Pack elements into an array

// SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others); // 1 2 [ 3, 4, 5 ]

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// -> Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3); // 5

// const x = [23, 5, 7];
// add(...x); // 35

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms'); // 2nd Parameter will be Empty array []

//

// -> Spread Operator (...)
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, ...arr];
// console.log(badNewArr); // [ 1, 2, 7, 8, 9 ]

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu); // [ 'Pizza', 'Pasta', 'Risotto', 'Gnocci' ]
// console.log(...newMenu); // Pizza Pasta Risotto Gnocci

// Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy); // [ 'Pizza', 'Pasta', 'Risotto' ]

// Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters); // [ 'J', 'o', 'n', 'a', 's', ' ', 'S.' ]
// console.log(...str); // J o n a s

// Real-world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients); // [ 'garlic', 'onion', 'tomato' ]
// restaurant.orderPasta(...ingredients);

// Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// -> Destructuring Objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// Destructuring Objects with different variable names
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// // a , b will be reassigned to 23, 7
// ({ a, b } = obj);
// console.log(a, b);

// Nested Objects
// const {
//   fri: { open: o, close: c },
// } = restaurant.openingHours;
// console.log(o, c);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'City Multan',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// -> Destructuring Arrays
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// Destructuring
// const [x, y, z] = arr;
// console.log(x, y, z); // 2 3 4

// const [first, second] = restaurant.categories;
// console.log(first, second); // Italian Pizzeria

// const [main, , secondary] = restaurant.categories;
// console.log(main, secondary); // Italian Vegetarian

// Swapping variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); // Vegetarian Italian

// [main, secondary] = [secondary, main];
// console.log(main, secondary); // Vegetarian Italian

// const [loo, ...others] = restaurant.categories;
// console.log(loo, others); // Italian [ 'Pizzeria', 'Vegetarian', 'Organic' ]

// Objects Destructuring
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse); // Garlic Bread Pizza

// Nested Destructuring

// const nested = [2, 4, [5, 6]];

// const [o, , m] = nested;
// const [i, j, [k, l]] = nested;
// console.log(o, m); // 2 [ 5, 6 ]
// console.log(i, j, k, l); // 2 4 5 6

// Default values
// const [p = 1, q = 1, r = 1] = [];
// const [m = 1, n = 1, o = 1] = [8];
// console.log(p, q, r); // 1 1 1
// console.log(m, n, o); // 8 1 1
