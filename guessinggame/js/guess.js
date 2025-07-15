let random = Math.floor(Math.random() * 100) + 1; 
let triesLeft = 5;

function checkNumber() {
  const guess = parseInt(document.getElementById("guess").value);
  const message = document.getElementById("message");
  const tries = document.getElementById("tries");

  if (isNaN(guess)) {
    message.textContent = "Please enter a valid number.";
    message.style.color = "red";
    return;
  }

  if (guess === random) {
    message.textContent = "🎉 Correct! You guessed the number!";
    message.style.color = "green";
    tries.textContent = "Tries left: " + triesLeft;
    return;
  } else if (guess < random) {
    message.textContent = "Too low! Try again.";
    message.style.color = "blue";
  } else {
    message.textContent = "Too high! Try again.";
    message.style.color = "blue";
  }

  triesLeft--;
  tries.textContent = "Tries left: " + triesLeft;

  if (triesLeft === 0) {
    message.textContent = `😢 No more tries! The number was ${random}.`;
    message.style.color = "red";
    document.getElementById("guess").disabled = true;
  }
}
