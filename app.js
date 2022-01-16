const startGameBtn = document.getElementById('start-game-btn');

const start = function startGame() {
    console.log('Game is starting');
}

// function startGame() {
//     console.log('Game is starting');
// }

const person = {
    greet: function greet() {
        console.log('Hello there!');
    }
}

person.greet();

startGame();

startGameBtn.addEventListener('click', startGame);