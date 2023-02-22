document.body.style.background = 'purple';
setTimeout(() => document.body.style.background = '', 5000);

let player1 = null;
let player2 = null;
let currentPlayer = null;

// 1.
const startButton = document.querySelector("#start");
// 2. Assign an arrow function to the `onclick` property of `startButton`
startButton.onclick = () => {
    // 1. Get/create a DOM object representing the element
    const gameBoard = document.querySelector("#game-board");
    // 2. Use the properties/methods of the object
    gameBoard.classList.remove("hidden");

    // 1. 
    const name1Textbox = document.querySelector("#player-name-one");
    const name2Textbox = document.querySelector("#player-name-two");

    // 2. 
    player1 = name1Textbox.value;
    player2 = name2Textbox.value;

    // 1.
    const player1Label = document.querySelector("#player-name-label-one");
    const player2Label = document.querySelector("#player-name-label-two");
    // 2.
    player1Label.innerHTML = player1;
    player2Label.innerHTML = player2;


    const startMenu = document.querySelector("#start-menu");
    startMenu.classList.add("hidden");

    currentPlayer = player1;

    const playerTurn = document.querySelector("#player-turn");
    playerTurn.innerHTML = player1 + "'s turn";
}

function renderCurrentPlayer() {
    const playerTurn = document.querySelector("#player-turn");
    playerTurn.innerHTML = currentPlayer + "'s turn";
}

const cells = document.querySelectorAll(".cell");

for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = () => {
        if (cells[i].innerHTML == "") {
            if (player1 == currentPlayer) {
                cells[i].innerHTML = "X";
                currentPlayer = player2;
                renderCurrentPlayer();
                checkForWinner("X", player1);
                checkForDraw();
                return;
            }

            if (player2 == currentPlayer) {
                cells[i].innerHTML = "O";
                currentPlayer = player1;
                renderCurrentPlayer();
                checkForWinner("O", player2);
                checkForDraw();
                return;
            }
        }
    }
}

function checkForWinner(symbol, player) {
    // Row 1
    if (cells[0].innerHTML == symbol && cells[1].innerHTML == symbol && cells[2].innerHTML == symbol) {
        renderWinner(player);
        return true;
    }
    // Row 2
    if (cells[3].innerHTML == symbol && cells[4].innerHTML == symbol && cells[5].innerHTML == symbol) {
        renderWinner(player);
        return true;
    }
    // Row 3
    if (cells[6].innerHTML == symbol && cells[7].innerHTML == symbol && cells[8].innerHTML == symbol) {
        renderWinner(player);
        return true;
    }
    // Column 1
    if (cells[0].innerHTML == symbol && cells[3].innerHTML == symbol && cells[6].innerHTML == symbol) {
        renderWinner(player);
        return true;
    }
    // Column 2
    if (cells[1].innerHTML == symbol && cells[4].innerHTML == symbol && cells[7].innerHTML == symbol) {
        renderWinner(player);
        return true;
    }
    // Column 3
    if (cells[2].innerHTML == symbol && cells[5].innerHTML == symbol && cells[8].innerHTML == symbol) {
        renderWinner(player);
        return true;
    }
    // Diagonal 1
    if (cells[0].innerHTML == symbol && cells[4].innerHTML == symbol && cells[8].innerHTML == symbol) {
        renderWinner(player);
        return true;
    }
    // Diagonal 2
    if (cells[2].innerHTML == symbol && cells[4].innerHTML == symbol && cells[6].innerHTML == symbol) {
        renderWinner(player);
        return true;
    }
    return false;
}

function renderWinner(winner) {
    const playerTurn = document.querySelector("#player-turn");
    playerTurn.innerHTML = winner + " wins!";
}

function checkForDraw() {
    if (isBoardFull() && !checkForWinner("X", player1) && !checkForWinner("O", player2)) {
        const playerTurn = document.querySelector("#player-turn");
        playerTurn.innerHTML = "Draw!";
    }
}

// Returns true/false depending on if the board is full.
function isBoardFull() {
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].innerHTML == "") {
            return false;
        }
    }

    return true;
}


// 1.
const restartButton = document.querySelector("#reset");
// 2. 
restartButton.onclick = () => {
    clearGameBoard();
}

function clearGameBoard() {
    for(let i = 0; i < cells.length; i++){
        cells[i].innerHTML = "";
    }
}