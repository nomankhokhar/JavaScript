'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (e) {
  e.preventDefault();
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// -> How the Dom Really Works

// .textContent
// .children
// .parentNode
// .cloneNode()

// .innerHTML , .classList , children , .parentElement, .append() ,append(), .insertAdjacentHTML(), querySelector(), .closest(), .matches(), .scrollIntoView(), .setAttribute()

// -> Selecting, Creating, and Deleting Elements

// Selecting Elements
// console.log(document);
// console.log(document.documentElement); // <html>...</html>
// console.log(document.head); // <head>...</head>
// console.log(document.body); // <body>...</body>
// console.log(document.querySelector('.header')); // <header class="header">...</header>

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
// console.log(allSections); // All Node list

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
// console.log(allButtons); // All HTML Collection

// console.log(document.getElementsByClassName('btn')); // All HTML Collection

// Creating and Inserting Elements
// .insertAdjacentHTML() , .insertAdjacentText()

// Read more about https://www.freecodecamp.org/news/innerhtml-vs-innertext-vs-textcontent/

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent =
  'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message); // Add before header element
// header.append(message); // Add after header element

// header.before(message); // Add before header element
header.after(message); // Add after header element

// Delete Elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // New way
    message.remove();

    // Old way
    // message.parentElement.removeChild(message);
  });

// -> Styles, Attributes and Classes

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height); // Empty string
console.log(message.style.backgroundColor); // rgb(55, 56, 61)

console.log(getComputedStyle(message).color); // rgb(255, 255, 255)
console.log(getComputedStyle(message).height); // 32px

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
// console.log(logo.alt); // Bankist logo
// console.log(logo.src); // http:// absolute path
// console.log(logo.className); // nav__logo

logo.alt = 'Beautiful minimalist logo';

// Non-standard
// console.log(logo.designer); // undefined
// console.log(logo.getAttribute('designer')); // Null

logo.setAttribute('company', 'Bankist'); // Add new attribute like company="Bankist"

// console.log(logo.src);
// console.log(logo.getAttribute('src')); // img/logo.png -> Relative path

const link = document.querySelector('.nav__link--btn');

// console.log(link.href);
// console.log(link.getAttribute('href'));

// Data Attributes
// console.log(logo.dataset.versionNumber); // 3.0

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // Not includes

// Don't use it because it will override all existing classes
logo.className = 'Noman Ali';
logo.className = 'noman-ali';

// -> Implementing Smooth Scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();

  // console.log(s1coords);

  // console.log(e.target.getBoundingClientRect());

  // console.log('Current Scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  // console.log(
  //   'Height/Width Viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // console.log(
  //   'Scroll Height/Width',
  //   document.documentElement.scrollHeight,
  //   document.documentElement.scrollWidth
  // );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // Old way
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // Modern way
  section1.scrollIntoView({ behavior: 'smooth' });
});

// -> Types of Events and Event Handlers

const h1 = document.querySelector('h1');
const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
};

// Newer way
h1.addEventListener('mouseenter', alertH1);

// Older Way
// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// -> Event Propagation Bubbling an Capturing

// First Capturing Phase Start then Bubbling Phase Start
// Capturing: Event starts at the root element and goes down to the target element

// Bubble: Event starts at the target element and bubbles up to the root element

// -> Event Propagation in Practice

// rgb(255, 255, 255)
const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColor = () => {
  return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
};

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);
  // Stop Propagation
  e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});

// -> Event Delegation: Implementing Page Navigation

// 1. Add event listener to common parent element
// 2. Determine what element originated the event
