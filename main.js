// COIN FLIP SIMULATOR

// HTML ELement Variables
let outputEl = document.getElementById("output");

// Btn Click Event
document.getElementById("btn").addEventListener("click", btnHandler);

function btnHandler() {
  // Flip Coins
  let randNum1 = Math.random();
  let coin1;
  if (randNum1 < 0.5) {
    coin1 = "heads";
  } else {
    coin1 = "tails";
  }

  // Output Results
  outputEl.innerHTML = `<img src="img/${coin1}.png">`;
}
