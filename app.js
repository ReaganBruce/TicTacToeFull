let cells = document.querySelectorAll(".row > div");
let winText = document.getElementById("win-text");
let player = "X";
let gameOver = false;
let drawCount = 0;
let winningCombonations = [
  [cells[0], cells[1], cells[2]],
  [cells[3], cells[4], cells[5]],
  [cells[6], cells[7], cells[8]],
  [cells[0], cells[3], cells[6]],
  [cells[1], cells[4], cells[7]],
  [cells[2], cells[5], cells[8]],
  [cells[0], cells[4], cells[8]],
  [cells[2], cells[4], cells[6]],
];

//loops through cells element while using 'click' event.
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}
//click event
function cellClicked(e) {
  if (e.target.textContent !== "") return;

  //sets cell text equal to the player variable
  e.target.textContent = player;

  drawCount++;

  //Swaps from 'X' and 'O'

  if (drawCount > 2) {
    winCheck();
  }

  if (drawCount === 9) {
    gameDraw();
  }

  togglePlayer();
}

function togglePlayer() {
  if (player == "X") {
    player = "O";
  } else {
    player = "X";
  }
}

//function to check for win
function winCheck() {
  for (i = 0; i < winningCombonations.length; i++) {
    let thisCombo = winningCombonations[i];
    winCount = 0;

    for (j = 0; j < thisCombo.length; j++) {
      if (thisCombo[j].textContent === player) {
        winCount++;
      }
    }
    if (winCount === 3) {
      winText.textContent = `Player ${player} wins!`;
      gameOver = true;
      console.log(winCount);
    }
  }
}

//need to call this into another function, or put in if..else statement above?
function gameDraw() {
  alert("DRAW!");
}

let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", reset); //Have to set getElementById to a variable, add addEventListener to that variable

function reset() {
  window.location.reload();
}

