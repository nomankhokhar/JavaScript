'use strict';

document.querySelector('.message').textContent;
document.querySelector('.message').textContent = '🎉 Correct Number!';
document.querySelector('.number').textContent = '?';
document.querySelector('.score').textContent = 20;
let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayMesColor = function (color) {
  document.querySelector('.message').style.color = color;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (guess == number) {
    displayMesColor('#60b347');
    document.querySelector('.number').style.width = '30rem';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = number;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (!guess) {
    displayMessage('⛔️ No number!');
  } else if (guess !== number) {
    if (score > 0) {
      score--;
      displayScore(score);
      displayMessage(guess > number ? '📈 Too High!' : '📉 Too Low!');
    } else {
      displayMessage('💥 You lost the game!');
      displayScore(0);
      displayMesColor('red');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayScore(score);
  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
