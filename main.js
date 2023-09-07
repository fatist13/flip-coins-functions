// COIN FLIP SIMULATOR

// HTML ELement Variables
let outputEl = document.getElementById("output");

// Btn Click Event
document.getElementById("btn").addEventListener("click", btnHandler);

function btnHandler() {
  // Flip Coins
  let coin1 = flipCoin();
  let coin2 = flipCoin();
  let coin3 = flipCoin();
 
  // Output Results
  outputEl.innerHTML = `<img src="img/${coin1}.png"> <img src="img/${coin2}.png"> <img src="img/${coin3}.png">`;
}

function flipCoin() {
  let randNum = Math.random();
  if (randNum < 0.5) {
    return "heads";
  } else {
    return "tails";
  }
}