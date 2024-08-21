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
