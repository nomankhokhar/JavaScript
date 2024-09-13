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
// const allSections = document.querySelectorAll('.section');
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
// message.textContent =
//   'We use cookies for improved functionality and analytics.';
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

// console.log(message.style.height); // Empty string
// console.log(message.style.backgroundColor); // rgb(55, 56, 61)

// console.log(getComputedStyle(message).color); // rgb(255, 255, 255)
// console.log(getComputedStyle(message).height); // 32px

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt); // Bankist logo
// console.log(logo.src); // http:// absolute path
// console.log(logo.className); // nav__logo

// logo.alt = 'Beautiful minimalist logo';

// Non-standard
// console.log(logo.designer); // undefined
// console.log(logo.getAttribute('designer')); // Null

// logo.setAttribute('company', 'Bankist'); // Add new attribute like company="Bankist"

// console.log(logo.src);
// console.log(logo.getAttribute('src')); // img/logo.png -> Relative path

// const link = document.querySelector('.nav__link--btn');

// console.log(link.href);
// console.log(link.getAttribute('href'));

// Data Attributes
// console.log(logo.dataset.versionNumber); // 3.0

// Classes
// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c'); // Not includes

// Don't use it because it will override all existing classes
// logo.className = 'Noman Ali';
// logo.className = 'noman-ali';

// -> Implementing Smooth Scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  // const s1coords = section1.getBoundingClientRect();

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

// const h1 = document.querySelector('h1');
// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
// };

// Newer way
// h1.addEventListener('mouseenter', alertH1);

// Older Way
// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// -> Event Propagation Bubbling an Capturing

// First Capturing Phase Start then Bubbling Phase Start
// Capturing: Event starts at the root element and goes down to the target element

// Bubble: Event starts at the target element and bubbles up to the root element

// -> Event Propagation in Practice

// rgb(255, 255, 255)
// const randomInt = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const randomColor = () => {
//   return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// };

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);
//   // Stop Propagation
//   e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// });

// -> Event Delegation: Implementing Page Navigation

// Older way and not efficient
// document.querySelectorAll('.nav__links').forEach(el =>
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     if (e.target.classList.contains('nav__link')) {
//       const id = e.target.getAttribute('href');
//       document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//     }
//   })
// );

// 1. Add event listener to common parent element
// 2. Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching Strategy -> Find the closet parent element
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// -> DOM Traversing

// const h1 = document.querySelector('h1');

// Going downwards: child
// Inside h1 element we have 4 elements with class of highlight
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// Closest parent element
// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// All siblings
// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

// -> Building a Tabbed Components

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Add active class
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// -> Passing Arguments to Event Handlers

// Menu fade animation

const nav = document.querySelector('.nav');

const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });

    logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

// -> Implementing a Sticky Navigation: The Scroll Event

const initialCoords = section1.getBoundingClientRect();

window.addEventListener('scroll', function () {
  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});

// -> A Better Way: The Intersection Observer API

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);

// observer.observe(section1);

const headerObserver = new IntersectionObserver(
  function (entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) nav.classList.add('sticky');
      else nav.classList.remove('sticky');
    });
  },
  {
    root: null,
    threshold: 1, // 100% of the target element is visible
    rootMargin: `-${nav.getBoundingClientRect().height}px`,
  }
);

headerObserver.observe(header);

// -> Revealing Elements on Scroll

const allSections = document.querySelectorAll('.section');

const sectionObserver = new IntersectionObserver(
  function (entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.remove('section--hidden');
      observer.unobserve(entry.target); // Stop observing the target element when observer is intersecting
    });
  },
  {
    root: null,
    threshold: 0.15,
  }
);

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// -> Lazy Loading Images

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    // Replace src with data-src
    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', function () {
      entry.target.classList.remove('lazy-img');
    });

    observer.unobserve(entry.target);
  });
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '-200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

// -> Building a Slider Component: Part 1

const slider = function () {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const dotContainer = document.querySelector('.dots');

  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');

  let currentSlide = 0;
  const maxSlide = slides.length;

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document.querySelectorAll('.dots__dot').forEach(dot => {
      dot.classList.remove('dots__dot--active');
    });

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  // Previous slide
  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }

    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  // -> Building a Slider Component: Part 2

  document.addEventListener('keydown', function (e) {
    e.key === 'ArrowLeft' && prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };

  init();
};

slider();

// -> Lifecycle DOM Events

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });

// -> Efficient Script Loading: defer and async

// defer -> Load the script after the HTML is parsed
// <script src="script.js" defer></script>

//  async -> Load the script asynchronously with html parsing
// <script src="script.js" async></script>
