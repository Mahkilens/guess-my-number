'use strict';

// ✅ Generate a random secret number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// ✅ Initialize player score and high score
let score = 20;
let highscore = 0;

// ✅ Helper function: Display messages on screen
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// ✅ Event listener for "Check!" button
document.querySelector('.check').addEventListener('click', function () {
  // Get user input and convert it from string → number
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // 🚫 No input
  if (!guess) {
    displayMessage('🚫 No number!');

  // 🎉 Correct guess
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    // Change background and enlarge number box
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Update high score if current score is higher
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  // 📈 Too high / 📉 Too low
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// ✅ Event listener for "Again!" button – resets the game
document.querySelector('.again').addEventListener('click', function () {
  // Reset variables
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Reset UI elements
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  // Reset styles
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
