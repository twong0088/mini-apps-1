// toggle variable. true = X false = O
var turn = true;
var insaneMode = false;
var board = {
  '00': null,
  '01': null,
  '02': null,
  '10': null,
  '11': null,
  '12': null,
  '20': null,
  '21': null,
  '22': null
}

var winner = null;
var Xscore = 0;
var Oscore = 0;


function clicked(event) {
var index = event.target.getAttribute('id');
  if (event.target.innerHTML.length === 0) {
    if (turn) {
      event.target.append('X');

    } else {
      event.target.append('O');

    }
    board[index] = turn;

    // check first row, first column and diagonal (backslash), then check middle column and middle row, then check last column and diagonal (slash), then check last row
    if ((board['00']!== null) && (board['00'] === board['01'] && board['00'] === board['02']) || (board['00'] === board['10'] && board['00'] === board['20']) || (board['00'] === board['11'] && board['00'] === board['22'])) {
      winner = board['00'];
    } else if ((board['11']!== null) && (board['11'] === board['01'] && board['11'] === board['21']) || (board['11'] === board['10'] && board['11'] === board['12'])) {
      winner = board['11'];
    } else if((board['02']!== null) && (board['02'] === board['12'] && board['02'] === board['22']) || (board['02'] === board['11'] && board['02'] === board['20'])) {
      winner = board['02'];
    } else if ((board['22']!== null) && (board['22'] === board['21'] && board['22'] === board['20'])) {
      winner = board['22'];
    }

    if (winner!== null) {
      if (winner) {
        Xscore++;
        document.getElementById("xScore").innerHTML = Xscore;
        alert('game over: X won');
        turn = !turn;
        resetBoard();
      } else {
        Oscore++;
        document.getElementById("oScore").innerHTML = Oscore;
        alert('game over: O won');
        turn = !turn;
        resetBoard();
      }
    }
    if (noNull()  && winner === null) {
      alert('game over: game draw');

      resetBoard();
    }

    turn = !turn;

    if(turn) {
      document.getElementById("upNext").innerHTML = `Current Player: X`;
    } else {
      document.getElementById("upNext").innerHTML = `Current Player: O`;
    }

  }
}

function resetBoard() {
  board = {
    '00': null,
    '01': null,
    '02': null,
    '10': null,
    '11': null,
    '12': null,
    '20': null,
    '21': null,
    '22': null
  }

  document.getElementById("gameboard").innerHTML =
`<tr>
<th class='cell' id='00'></th>
<th class='cell' id='01'></th>
<th class='cell' id='02'></th>
</tr>
<tr>
<th class='cell' id='10'></th>
<th class='cell' id='11'></th>
<th class='cell' id='12'></th>
</tr>
<tr>
<th class='cell' id='20'></th>
<th class='cell' id='21'></th>
<th class='cell' id='22'></th>
</tr>`;
}

function noNull(){
  for(key in board) {
    if (board[key] === null) {
      return false;
    }
  }
  return true;
}

function activateInsaneMode(event){

  insaneMode = !insaneMode;
  var table = document.getElementById('gameboard');

  if (insaneMode){
    table.classList.add('insaneMode');
  } else {
    table.classList.remove('insaneMode');
  }

}