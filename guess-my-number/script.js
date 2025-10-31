'use strict';

// Generate a random secret number between 1 and 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;

// Display the secret number (for testing/debugging)
// Later, you can hide this by setting textContent to '?'
document.querySelector('.number').textContent = secretNumber;

// Initialize player score to 20
let score = 20;

// Add event listener to the "Check!" button
// This runs the function every time the button is clicked
document.querySelector('.check').addEventListener('click', function () {
  // Get the number the player entered and convert it from string to number
  const guess = Number(document.querySelector('.guess').value);

  // Log the guessed number and its type (for debugging)
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No number!';
  }
  // When the player guesses correctly
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  }
  // When the guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--; // Decrease score by 1
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // When the guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--; // Decrease score by 1
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

