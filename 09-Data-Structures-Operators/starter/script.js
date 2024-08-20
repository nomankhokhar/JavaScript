'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} ${this.starterMenu[mainIndex]} and will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

// -> Spread Operator
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
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

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
