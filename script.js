const gameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];

    const isBoardFull = () => {
        return board.every(boardArrayItem => boardArrayItem !== '');
    }

    const diagonalWin = () => {
        if (board[4] === board[0] && board[8]) {
            console.log('Diagonal Win 1');
        }
        if (board[4] === board[2] && board[6]) {
            console.log('Diagonal Win 2');
        }
    }

    const horizontalWin = () => {
        if (board[0] === board[1] && board[2]) {
            console.log('Horizontal Win 1');
        }
        if (board[3] === board[4] && board[5]) {
            console.log('Horizontal Win 2');
        }
        if (board[6] === board[7] && board[8]) {
            console.log('Horizontal Win 3');
        }
    }

    return {
        board,
        isBoardFull,
        diagonalWin,
        horizontalWin
    }
})();

const createPlayer = function (name, marker) {
    return {
        name: name,
        marker: marker
    }
}

const playerOne = createPlayer('playerOne', 'X');
const playerTwo = createPlayer('playerTwo', 'O');

const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('click', () => {
        const index = square.dataset.index;
        if (square.innerHTML === '') {
            setMarker(square, index, currentMarker);
            currentMarker = !currentMarker;
            console.log(gameBoard.board);
        }
        if (gameBoard.isBoardFull()) {
            console.log('Board is full');
        }
        gameBoard.diagonalWin();
        gameBoard.horizontalWin();
    });
});

let currentMarker = 'X';

function setMarker(square, index, currentMarker) {
    square.innerHTML = currentMarker ? 'X' : 'O';
    gameBoard.board[index] = square.innerHTML;
}

const clearBoard = document.querySelector('#clearBoard');

clearBoard.addEventListener('click', () => {
    squares.forEach(square => {
        square.innerHTML = '';
    })
    gameBoard.board = ['', '', '', '', '', '', '', '', ''];
    console.log(gameBoard.board);
})