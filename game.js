//var MoveError = require("./moveError");

function Game () {
  this.board = new Board();
  this.currentPlayer = Board.marks[0];
  this.msg = "";
}

Game.prototype.isOver = function () {
  return this.board.isOver();
};

Game.prototype.playMove = function (pos) {
  this.board.placeMark(pos, this.currentPlayer);
  this.swapTurn();
};

// Game.prototype.promptMove = function (callback) {
//   var game = this;
//
//   this.board.print();
//   console.log("Current Turn: " + this.currentPlayer)
//
//   this.reader.question("Enter rowIdx: ", function (rowIdxStr) {
//     var rowIdx = parseInt(rowIdxStr);
//     game.reader.question("Enter colIdx: ", function (colIdxStr) {
//       var colIdx = parseInt(colIdxStr);
//       callback([rowIdx, colIdx]);
//     });
//   });
// };


Game.prototype.handleMove = function(pos) {
  var game = this;

  if (game.board.isEmptyPos(pos)) {
    game.playMove(pos);
    game.msg = "";
  } else {
    game.msg = "That is not an empty square."
  }

  if (game.isOver()) {
    game.board.print();
    if (game.winner()) {
      console.log(game.winner() + " has won!");
    } else {
      console.log("NO ONE WINS!");
    }
  }
};

Game.prototype.swapTurn = function () {
  if (this.currentPlayer === Board.marks[0]) {
    this.currentPlayer = Board.marks[1];
  } else {
    this.currentPlayer = Board.marks[0];
  }
};

Game.prototype.winner = function () {
  return this.board.winner();
};

