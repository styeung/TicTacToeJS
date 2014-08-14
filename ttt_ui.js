function TTTUI(element, game) {
  var $element = $(element)
  var id = $element.attr("id");

  var idMap = [[0,0], [0, 1], [0,2],
              [1,0], [1, 1], [1,2],
              [2,0], [2, 1], [2,2]];

  var pos = idMap[parseInt(id) -1];

  game.handleMove(pos);

  //render what happens to the board
  var mark = game.board.grid[pos[0]][pos[1]];
  $element.addClass(mark);

  //render turn & game over messages
  var currentPlayer = game.currentPlayer;
  $('h2').removeClass();
  $('h2').addClass(currentPlayer);

  if (game.isOver()) {
    $('h2').removeClass();

    if (game.winner()) {
      $('h2').html("Player " + game.winner() + " has won!");
    } else {
      $('h2').html("Nobody wins :(");
    }
  }

  //render errors
  $('h3').html(game.msg);
}