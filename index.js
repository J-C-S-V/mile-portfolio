/*Scores*/
let manScore = 0;
let computerScore = 0;
/*HTML elements*/
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const manScoreText = document.querySelector('.manScore');
const computerScoreText = document.querySelector('.computerScore');
const manResult = document.querySelector('#man-result');
const computerResult = document.querySelector('#computer-result');
const body = document.querySelector('body');
/*Helper function to get the computers answer*/
function getComputerChoice() {
  if (Math.ceil(Math.random() * 3) === 1) {
    return 'Rock';
  } else if (Math.ceil(Math.random() * 3) === 2) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}
/*Checks who wins the round*/
function playRound(playerSelection, computerSelection) {
  console.log(playerSelection, computerSelection);
  if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    computerScore += 1;
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    manScore += 1;
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    computerScore += 1;
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    manScore += 1;
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    computerScore += 1;
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    manScore += 1;
  } else if (playerSelection === computerSelection) {
  }
}

/*Choices values*/
let playerSelection = undefined;
let computerSelection = getComputerChoice();

rock.addEventListener('click', () => {
  playerSelection = 'Rock';
  computerSelection = getComputerChoice();
  game();
  manResult.innerText = playerSelection;
  computerResult.innerText = computerSelection;
  gameOver();
});
paper.addEventListener('click', () => {
  playerSelection = 'Paper';
  computerSelection = getComputerChoice();
  game();
  manResult.innerText = playerSelection;
  computerResult.innerText = computerSelection;
  gameOver();
});
scissors.addEventListener('click', () => {
  playerSelection = 'Scissors';
  computerSelection = getComputerChoice();
  game();
  manResult.innerText = playerSelection;
  computerResult.innerText = computerSelection;
  gameOver();
});

function game() {
  playRound(playerSelection, computerSelection);
  manScoreText.innerText = `${manScore}`;
  computerScoreText.innerText = `${computerScore}`;
}

function gameOver() {
  if (manScore === 10) {
    body.innerText = 'You won!!!!!!!!!!!';
    body.style.lineHeight = '500px';
    body.style.fontSize = '100px';
  } else if (computerScore === 10) {
    body.innerText = 'You lose :c';
    body.style.lineHeight = '500px';
    body.style.fontSize = '100px';
  }
}
