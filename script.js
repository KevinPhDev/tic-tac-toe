const gameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];

    const isBoardFull = () => {
        return board.every(boardArrayItem => boardArrayItem !== '');
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
        board,
        isBoardFull,
        diagonalWin,
        horizontalWin,
        verticalWin
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
        if (gameBoard.diagonalWin() || gameBoard.horizontalWin() || gameBoard.verticalWin() === 'X') {
            playerX.points++;
            console.log(`X: ${playerX.points}`);
            console.log(`O: ${playerO.points}`);
        } else if (gameBoard.diagonalWin() || gameBoard.horizontalWin() || gameBoard.verticalWin() === 'O') {
            playerO.points++;
            console.log(`X: ${playerX.points}`);
            console.log(`O: ${playerO.points}`);
        }
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