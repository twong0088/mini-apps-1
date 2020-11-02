// toggle variable. true = X false = O
var turn = true;
var counter = 0;
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
        alert('game over X won');
      } else {
        alert('game over O won');
      }
    }
    if (counter === 9 && winner === null) {
      alert('game over: game tied');
    }

    turn = !turn;

    if(turn) {
      document.getElementById("upNext").innerHTML = `Up Next: X`;
    } else {
      document.getElementById("upNext").innerHTML = `Up Next: O`;
    }
  }
  counter++;
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
  counter = 0;
  document.getElementById("table").innerHTML =
`<tr>
<th id='00' onClick='clicked(event)'></th>
<th id='01' onClick='clicked(event)'></th>
<th id='02' onClick='clicked(event)'></th>
</tr>
<tr>
<th id='10' onClick='clicked(event)'></th>
<th id='11' onClick='clicked(event)'></th>
<th id='12' onClick='clicked(event)'></th>
</tr>
<tr>
<th id='20' onClick='clicked(event)'></th>
<th id='21' onClick='clicked(event)'></th>
<th id='22' onClick='clicked(event)'></th>
</tr>`;


}

