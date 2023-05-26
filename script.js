const gameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', '']
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
    square.addEventListener('click', () => setMarker(square))
})

function setMarker(square) {
    square.innerHTML = 'X';
}