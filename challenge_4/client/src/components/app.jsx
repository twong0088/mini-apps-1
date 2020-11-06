import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: false, //false is black, true is red
      board: [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
      ]
    }
    this.addPiece = this.addPiece.bind(this);
  }
  addPiece(event){
    console.log(event.target.dataset.x, event.target.dataset.y);
    var xIndex = Number(event.target.dataset.x);
    var newBoard = this.state.board;
    var counter = 0;
    while (true) {
      if (newBoard[counter][xIndex] !== null) {
        counter++;
      } else {
        break;
      }
    }
    newBoard[counter][xIndex] = this.state.turn;
    var id = '' + xIndex + counter;
    console.log(id);
    var element = document.getElementById(id);
    if (this.state.turn) {
      element.append('X');
    } else {
      element.append('O');
    }

    this.setState({
      turn: !this.state.turn,
      board: newBoard
    },()=> {
      console.log(this.state);
    })
  }

  render() {
    return(
      <div>
        <h1>Connect Four Board</h1>
        <table id='gameboard' onClick={this.addPiece}>
          <tbody>
            <tr>
              <th id='05' data-x='0' data-y='5'></th>
              <th id='15' data-x='1' data-y='5'></th>
              <th id='25' data-x='2' data-y='5'></th>
              <th id='35' data-x='3' data-y='5'></th>
              <th id='45' data-x='4' data-y='5'></th>
              <th id='55' data-x='5' data-y='5'></th>
              <th id='65' data-x='6' data-y='5'></th>
            </tr>
            <tr>
              <th id='04' data-x='0' data-y='4'></th>
              <th id='14' data-x='1' data-y='4'></th>
              <th id='24' data-x='2' data-y='4'></th>
              <th id='34' data-x='3' data-y='4'></th>
              <th id='44' data-x='4' data-y='4'></th>
              <th id='54' data-x='5' data-y='4'></th>
              <th id='64' data-x='6' data-y='4'></th>
            </tr>
            <tr>
              <th id='03' data-x='0' data-y='3'></th>
              <th id='13' data-x='1' data-y='3'></th>
              <th id='23' data-x='2' data-y='3'></th>
              <th id='33' data-x='3' data-y='3'></th>
              <th id='43' data-x='4' data-y='3'></th>
              <th id='53' data-x='5' data-y='3'></th>
              <th id='63' data-x='6' data-y='3'></th>
            </tr>
            <tr>
              <th id='02' data-x='0' data-y='2'></th>
              <th id='12' data-x='1' data-y='2'></th>
              <th id='22' data-x='2' data-y='2'></th>
              <th id='32' data-x='3' data-y='2'></th>
              <th id='42' data-x='4' data-y='2'></th>
              <th id='52' data-x='5' data-y='2'></th>
              <th id='62' data-x='6' data-y='2'></th>
            </tr>
            <tr>
              <th id='01' data-x='0' data-y='1'></th>
              <th id='11' data-x='1' data-y='1'></th>
              <th id='21' data-x='2' data-y='1'></th>
              <th id='31' data-x='3' data-y='1'></th>
              <th id='41' data-x='4' data-y='1'></th>
              <th id='51' data-x='5' data-y='1'></th>
              <th id='61' data-x='6' data-y='1'></th>
            </tr>
            <tr>
              <th id='00' data-x='0' data-y='0'></th>
              <th id='10' data-x='1' data-y='0'></th>
              <th id='20' data-x='2' data-y='0'></th>
              <th id='30' data-x='3' data-y='0'></th>
              <th id='40'data-x='4' data-y='0'></th>
              <th id='50' data-x='5' data-y='0'></th>
              <th id='60' data-x='6' data-y='0'></th>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

}

export default App;
