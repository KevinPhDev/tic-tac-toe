const gameBoard = (() => {
    let board = ['', '', '', '', '', '', '', '', ''];

    return {
        board
    }
})();

const createPlayer = function (name, marker) {
    return {
        name: name,
        marker: marker
    }
}

const player1 = createPlayer('playerOne', 'X');
const player2 = createPlayer('playerTwo', 'O');

const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('click', () => {
        const index = square.dataset.index;
        if (square.innerHTML === '') {
            setMarker(square, index, currentMarker);
            currentMarker = !currentMarker;
            console.log(gameBoard.board);
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