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
const buttonTryAgain = document.createElement('button');

function computerChoice() {
  if (Math.ceil(Math.random() * 3) === 1) {
    return 'Rock';
  } else if (Math.ceil(Math.random() * 3) === 2) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}
function checkWhoWinsTheRound(playerSelection, computerSelection) {
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
function game() {
  checkWhoWinsTheRound(playerSelection, computerSelection);
  manScoreText.innerText = `${manScore}`;
  computerScoreText.innerText = `${computerScore}`;
}
function gameOver() {
  if (manScore === 2) {
    body.innerText = 'You won!!!!!!!!!!!';
    body.style.lineHeight = '500px';
    body.style.fontSize = '100px';
    buttonTryAgain.innerText = 'Try again';
    document.body.appendChild(buttonTryAgain);
    body.style.display = 'grid';
    buttonTryAgain.style.width = '200px';
    buttonTryAgain.style.margin = '0 auto';
  } else if (computerScore === 2) {
    body.innerText = 'You lose :c';
    body.style.lineHeight = '500px';
    body.style.fontSize = '100px';
    buttonTryAgain.innerText = 'Try again';
    document.body.appendChild(buttonTryAgain);
    body.style.display = 'grid';
    buttonTryAgain.style.width = '200px';
    buttonTryAgain.style.margin = '0 auto';
  }
}
/*Choices values*/
let playerSelection;
let computerSelection = computerChoice();

rock.addEventListener('click', () => {
  playerSelection = 'Rock';
  computerSelection = computerChoice();
  game();
  manResult.innerText = playerSelection;
  computerResult.innerText = computerSelection;
  gameOver();
});
paper.addEventListener('click', () => {
  playerSelection = 'Paper';
  computerSelection = computerChoice();
  game();
  manResult.innerText = playerSelection;
  computerResult.innerText = computerSelection;
  gameOver();
});
scissors.addEventListener('click', () => {
  playerSelection = 'Scissors';
  computerSelection = computerChoice();
  game();
  manResult.innerText = playerSelection;
  computerResult.innerText = computerSelection;
  gameOver();
});
//Try again button listener
buttonTryAgain.addEventListener('click', () => {
  setInterval(() => {
    location.reload();
  }, 1);
});
