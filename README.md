# 🎯 Guess My Number!
## 🧩 Version 1.0.0

A fun and interactive **JavaScript number guessing game** built while learning DOM manipulation in the *Complete JavaScript Course*. This project helped me practice working with the DOM, handling events, and managing game state using core JavaScript concepts.

---

## 🧩 Features
- Random number generation between 1 and 20  
- Real-time feedback messages (Too High, Too Low, Correct!)  
- Score tracking and high score functionality  
- Reset button to restart the game  
- Retro arcade-style UI using the “Press Start 2P” Google font  

---

## 🧠 What I Learned
- How to **select and manipulate DOM elements** with JavaScript  
- **Event handling** with `addEventListener()`  
- Using conditional logic to update the UI dynamically  
- Applying **CSS styling** for visual feedback and layout design  
- Basic debugging through the browser console  

---

## 🖥️ Tech Stack
- **HTML5** for structure  
- **CSS3** for design  
- **Vanilla JavaScript (ES6+)** for logic  

---

## 🚀 How to Play
1. Enter a number between **1 and 20** in the input box.  
2. Click **“Check!”** to see if your guess is correct.  
3. If you’re wrong, hints will tell you if your guess is too high or too low.  
4. You start with **20 points**, losing one for every wrong guess.  
5. Try to beat your **high score!**  
6. Click **“Again!”** to restart.

## 🧩 Version 1.0.1

Added an event listener to the `.check` button that:
- Reads the user’s guess from the input field
- Logs the guess to the console
- Displays “🚫 No number!” if no guess is entered

/**
## 🧩 Version 1.0.2
 * 🎮 Game Reset Event Handler
 * ----------------------------
 * Triggered when the player clicks the "Again!" button.
 *
 * 🧩 Purpose:
 * Resets the entire game to its initial state, allowing the player
 * to start over with a fresh score and new secret number.
 *
 * 🧠 Functionality:
 * - Reinitializes game data (score = 20, new secret number)
 * - Resets the displayed score and feedback message
 * - Hides the secret number (sets it back to '?')
 * - Clears the player’s guess input field
 * - Restores the original background color (#222)
 * - Resets the number box width to its default (15rem)
 *
 * 💡 Concepts Practiced:
 * - DOM manipulation (`querySelector`, `textContent`, `style`)
 * - Event handling with `addEventListener()`
 * - Managing and resetting application state
 */


