const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW ='Draw';
const RESULT_PLAYER_WINS = 'PLAYER_WINS'
const RESULT_COMPUTEER_WINS = 'COMPUTER_WINS'

let gameIsRunning = false;

const getPlayerChoice = function() {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
    console.log(selection);
    if (
        selection !== ROCK && 
        selection !== PAPER && 
        selection !== SCISSORS
        ) {
            alert('Invalid choice! We chose Rock for you');
            return DEFAULT_USER_CHOICE
        }
        return selection;
}

const getComputerChoice = function() {
    const randomValue = Math.random();
    if (randomValue <= 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

const getWinner = function(cChoice, pChoice) {
    if (cChoice === pChoice) {
        return RESULT_DRAW;
    } else if(
        cChoice ===  ROCK && pChoice === PAPER || 
        cChoice === PAPER && pChoice == SCISSORS ||
        cChoice === SCISSORS && pChoice == ROCK
    ) {
        return RESULT_PLAYER_WINS;
    } else {
        return RESULT_COMPUTEER_WINS
    }
}

startGameBtn.addEventListener('click', function() {
    if (gameIsRunning) {

    }

    gameIsRunning  = true;
    console.log('Game is starting...');
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, playerChoice);
    console.log(winner); 

    let message = `You picked ${playerChoice}, computer picked ${computerChoice}, therefore you `;
    if (winner === RESULT_DRAW) {
        message = message + `had a draw.`;
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + `you won.`;
    } else {
        message = message + `you lost.`;
    }
    alert(message);
    gameIsRunning = false;

});