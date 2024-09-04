'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}"> ${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
      `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

/////////////////////////////////////////////////

// -> Simple Array Methods

// let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE METHOD returns a new array
// console.log(arr.slice(2)); // ['c', 'd', 'e']
// console.log(arr.slice(2, 4)); // ['c', 'd']
// console.log(arr.slice(-2)); // ['d', 'e']
// console.log(arr.slice(-1)); // ['e']
// console.log(arr.slice(1, -2)); // ['b', 'c']
// console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']
// console.log([...arr]); // ['a', 'b', 'c', 'd', 'e']

// SPLICE METHOD mutates the original array
// console.log(arr.splice(2)); // ['c', 'd', 'e']
// console.log(arr); // ['a', 'b']
// console.log(arr.splice(-1)); // ['b']
// console.log(arr); // ['a']
// console.log(arr.splice(1, 2)); // ['b', 'c']
// console.log(arr); // ['a', 'd']

// REVERSE METHOD mutates the original array
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j']
// console.log(arr2); // ['f', 'g', 'h', 'i', 'j']

// CONCAT METHOD does not mutate the original array
// const letters = arr.concat(arr2);
// console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
// console.log([...arr, ...arr2]); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// JOIN METHOD
// console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j

// -> The New at Methods

// const arr = [23, 11, 4];
// console.log(arr[0]); // 23
// console.log(arr.at(0)); // 23

// Getting the last element of an array
// console.log(arr[arr.length - 1]); // 4s
// console.log(arr.slice(-1)[0]); // 4
// console.log(arr.slice(-1).pop()); // 4

// Getting the first element of an array
// console.log(arr[0]); // 23
// console.log(arr.slice(0, 1)[0]); // 23

// -> Looping Arrays: forEach

// for-of loop
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`You ${i + 1} deposited ${movement}`);
//   } else {
//     console.log(`You ${i + 1} withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('--- forEach ---');

// forEach method break does not work in forEach loop
// movements.forEach(function (movement, index) {
//   if (movement > 0) {
//     console.log(`You ${index + 1} deposited ${movement}`);
//   } else {
//     console.log(`You ${index + 1} withdrew ${Math.abs(movement)}`);
//   }
// });

// -> forEach With Maps and Sets

// Map also has a forEach method
// currencies.forEach(function (value, key) {
//   console.log(`${key}: ${value}`);
// });

// Set has a forEach methods does not have indexes
// const currentSet = new Set(['USD', 'EUR', 'USD', 'GBP']);
// console.log(currentSet);

// currentSet.forEach(function (value, _, set) {
//   console.log(`${value}: ${(value, _)}`);
// });

// -> Project: Bankist App
