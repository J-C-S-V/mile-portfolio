// alert('Tell me something');

function getComputerChoice() {
  if (Math.ceil(Math.random() * 3) === 1) {
    return 'Rock';
  } else if (Math.ceil(Math.random() * 3) === 2) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  // console.log(playerSelection, computerSelection);
  if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    return 'Computer wins';
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    return 'Player wins';
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    return 'Computer wins';
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    return 'Player wins';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    return 'Computer wins';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    return 'Player wins';
  } else if (playerSelection === computerSelection) {
    return 'Draw';
  }
}

const playerSelection = 'Rock';
const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

function game() {
  for (let i = 1; i <= 5; i++) {
    console.log(playRound(playerSelection, computerSelection));
  }
}

let result = game();

console.log(result);
