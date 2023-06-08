const gameBoard = (() => {
    let board = ['', '', '', '', '', '', '', '', ''];

    const getBoard = () => [...board];

    const setBoard = (newBoard) => {
        board = [...newBoard];
    }

    const isBoardFull = () => {
        return board.every(boardArrayItem => boardArrayItem !== '');
    }

    let gameOver = false;

    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', ''];
    }

    const diagonalWin = () => {
        if (board[4] !== '' && board[4] === board[0] && board[0] === board[8]) {
            console.log('Diagonal Win 1');
            console.log(`${board[4]} Wins!`);
            return board[4];
        }
        if (board[4] !== '' && board[4] === board[2] && board[2] === board[6]) {
            console.log('Diagonal Win 2');
            console.log(`${board[4]} Wins!`);
            return board[4];
        }
    }
    
    const horizontalWin = () => {
        if (board[0] !== '' && board[0] == board[1] && board[1] == board[2]) {
            console.log('Horizontal Win 1');
            console.log(`${board[0]} Wins!`);
            return board[0];
        }
        if (board[3] !== '' && board[3] == board[4] && board[4] == board[5]) {
            console.log('Horizontal Win 2');
            console.log(`${board[3]} Wins!`);
            return board[3];
        }
        if (board[6] !== '' && board[6] == board[7] && board[7] == board[8]) {
            console.log('Horizontal Win 3');
            console.log(`${board[6]} Wins!`);
            return board[6];
        }
    }
    
    const verticalWin = () => {
        if (board[0] !== '' && board[0] == board[3] && board[3] == board[6]) {
            console.log('Vertical Win 1');
            console.log(`${board[0]} Wins!`);
            return board[0];
        }
        if (board[1] !== '' && board[1] == board[4] && board[4] == board[7]) {
            console.log('Vertical Win 2');
            console.log(`${board[1]} Wins!`);
            return board[1];
        }
        if (board[2] !== '' && board[2] == board[5] && board[5] == board[8]) {
            console.log('Vertical Win 3');
            console.log(`${board[2]} Wins!`);
            return board[2];
        }
    }

    return {
        getBoard,
        setBoard,
        isBoardFull,
        resetBoard,
        diagonalWin,
        horizontalWin,
        verticalWin,
        gameOver
    }
})();

const createPlayer = function (name, marker, points) {
    return {
        name: name,
        marker: marker,
        points: points
    }
}

const playerX = createPlayer('playerX', 'X', 0);
const playerO = createPlayer('playerO', 'O', 0);
const playerOneScore = document.querySelector('#playerOneScore');
const playerTwoScore = document.querySelector('#playerTwoScore');

const squares = document.querySelectorAll('.square');

function setMarker(square, index, currentMarker) {
    square.textContent = currentMarker ? 'X' : 'O';
    let newBoard = gameBoard.getBoard();
    newBoard[index] = square.textContent;
    gameBoard.setBoard(newBoard);
}

const squareClick = (event) => {
    const square = event.target;
    const index = square.dataset.index;
    if (gameBoard.gameOver) {
        return;
    }
    if (square.textContent === '') {
        setMarker(square, index, currentMarker);
        currentMarker = !currentMarker;
        console.log(gameBoard.getBoard());
    }
    if (gameBoard.isBoardFull()) {
        console.log('Board is full');
    }
    const winningMarker = gameBoard.diagonalWin() || gameBoard.horizontalWin() || gameBoard.verticalWin();
    if (!winningMarker && gameBoard.isBoardFull()) {
        console.log('Game Tied!');
        gameBoard.gameOver = true;
    }
    if (winningMarker === 'X') {
        playerX.points++;
        playerOneScore.textContent = playerX.points;
        console.log(`X: ${playerX.points}`);
        console.log(`O: ${playerO.points}`);
        gameStatus.textContent = 'Player 1 Wins';
        gameBoard.gameOver = true;
    } else if (winningMarker === 'O') {
        playerO.points++;
        playerTwoScore.textContent = playerO.points;
        console.log(`X: ${playerX.points}`);
        console.log(`O: ${playerO.points}`);
        gameStatus.textContent = 'Player 2 Wins';
        gameBoard.gameOver = true;
    }
    console.log(winningMarker);
};

squares.forEach(square => {
    square.addEventListener('click', squareClick);
});

let currentMarker = true;

const clearBoard = document.querySelector('#clearBoard');

clearBoard.addEventListener('click', () => {
    squares.forEach(square => {
        square.textContent = '';
    })
    gameBoard.resetBoard();
    console.log(gameBoard.getBoard());
    gameBoard.gameOver = false;
    currentMarker = true;
});


const gameStatus = document.querySelector('#gameStatus');
