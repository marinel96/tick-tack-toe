const board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

let currentPlayer = 'X';

function markCell(row, col) {
  if (board[row][col] === '') {
    board[row][col] = currentPlayer;
    updateDOM();
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
  }
}

function updateDOM() {
  const cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
    const row = Math.floor(i / 3);
    const col = i % 3;
    cells[i].textContent = board[row][col];
  }
}

function restartGame() {
  board.forEach((row, i) => {
    row.forEach((cell, j) => {
      board[i][j] = '';
    });
  });
  currentPlayer = 'X';
  updateDOM();
}