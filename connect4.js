var playerOne = prompt("Player One: Enter your name, you will be blue!");
var playerOneColor = 'rgb(60, 136, 250)';

var playerTwo = prompt("Player Two: Enter your name, you will be red!");
var playerTwoColor = 'rgb(240, 60, 60)';

var game_on = true;
var table = $('table tr');

function reportWin(rowNum, colNum) {
  console.log("You won starting at this row,col");
  console.log(rowNum);
  console.log(colNum);
}

function changeColor(rowIndex, colIndex, color) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color', color);
}

function returnColor(rowIndex, colIndex) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

function checkBottom(colIndex) {
  var colorReport = returnColor(5,colIndex);
  for (var row = 5; row >= 0; row--) {
    colorReport = returnColor(row, colIndex);
    if (colorReport === 'rgb(128, 128, 128)') {
      return row;
    }
  }
}

function colorMatchCheck(one,two,three,four){
  return (one===two && one===three && one===four && one !== 'rgb(128, 128, 128)' && one !== undefined);
}


function horizontalWinCheck() {
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 4; col++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row,col+1) ,returnColor(row,col+2), returnColor(row,col+3))) {
        console.log('horizontal');
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}


function verticalWinCheck() {
  for (var col = 0; col < 7; col++) {
    for (var row = 0; row < 3; row++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col) ,returnColor(row+2,col), returnColor(row+3,col))) {
        console.log('vertical');
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}

function diagonalWinCheck() {
  for (var col = 0; col < 5; col++) {
    for (var row = 0; row < 7; row++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col+1) ,returnColor(row+2,col+2), returnColor(row+3,col+3))) {
        console.log('diagonal');
        reportWin(row,col);
        return true;
      }else if (colorMatchCheck(returnColor(row,col), returnColor(row-1,col+1) ,returnColor(row-2,col+2), returnColor(row-3,col+3))) {
        console.log('diagonal');
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}

// START GAME
var currentName = playerOne;
var currentColor = playerOneColor;
var currentPlayer = 1;

$('h3').text(playerOne+" it is your turn, pick a column to drop your chip!");

$('.board button').on('click', function(){
  var col = $(this).closest('td').index();
  var bottomAvail = checkBottom(col);
  changeColor(bottomAvail,col,currentColor);
  if (horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()) {
    $('h1').text(currentName+ ", you have won! Refresh browser to play again.");
    $('h3').fadeOut('fast');
    $('h2').fadeOut('fast');
  }
  currentPlayer = currentPlayer * -1;
  if (currentPlayer === 1) {
    currentName = playerOne;
    currentColor = playerOneColor;
    $('h3').text(playerOne+" it is your turn, pick a column to drop your chip!");
  }else{
    currentName = playerTwo;
    currentColor = playerTwoColor;
    $('h3').text(playerTwo+" it is your turn, pick a column to drop your chip!");
  }
})
