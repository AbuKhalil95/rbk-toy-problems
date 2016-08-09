/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  Be systematic with your approach - make a clear plan before you start writing code.
 *
 *  Extra credit: Make your solution work for a grid of any size.
 *
 */

// A Board class will be useful. You can add extra methods to it.

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
      return !!this[i][j];
  }
  return board;
};

//You can create a board size 5 like this:
//var myBoard = makeBoard(5);
//The answer for a board size 5 is 8512 unique paths

var robotPaths = function(n) {
  var board = makeBoard(n);
  var uniquePaths = 0;
  function helperRobot(board , i ,j) {
    debugger;
    if(board.hasBeenVisited(4,4)){
      uniquePaths ++;
      board[4][4]=false;
    }
    else {
      if(i<=n-1 && j<=n-1){
        if(!board.hasBeenVisited(i,j)){
          board.togglePiece(i,j);
          console.log(i,j);
          helperRobot(board,i,j);
          board.togglePiece(i,j);
        }
      }
      if((i+1)<=n-1 && j<=n-1){
        if(!board.hasBeenVisited(i+1,j)){
          board.togglePiece(i+1,j);
          console.log(i+1,j);
          helperRobot(board,i+1,j);
          board.togglePiece(i+1,j);
        }
      }
      if(i<=n-1 && (j+1)<=n-1){
        if(!board.hasBeenVisited(i,j+1)){
          board.togglePiece(i,j+1);
          console.log(i,j+1);
          helperRobot(board,i,j+1);
          board.togglePiece(i,j+1);
        }
      }
      if(i<=n-1 && (j-1)<=n-1){
        if(!board.hasBeenVisited(i,j-1)){
          board.togglePiece(i,j-1);
          console.log(i,j-1);
          helperRobot(board,i,j-1);
          board.togglePiece(i,j-1);
        }
      }
      if((i-1)<=n-1 && j<=n-1){
        if(!board.hasBeenVisited(i-1,j)){
          board.togglePiece(i-1,j);
          console.log(i-1,j);
          helperRobot(board,i-1,j);
          board.togglePiece(i-1,j);
        }
      }
    }

  }

  helperRobot(board,0,0);

  return uniquePaths;
}

