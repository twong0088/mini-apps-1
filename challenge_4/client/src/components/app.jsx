import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: false, //false is black, true is red
      board: [
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
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
    if (this.state.turn) {
      event.target.append('X');
    } else {
      event.target.append('O');
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
              <th data-x='0' data-y='5'></th>
              <th data-x='1' data-y='5'></th>
              <th data-x='2' data-y='5'></th>
              <th data-x='3' data-y='5'></th>
              <th data-x='4' data-y='5'></th>
              <th data-x='5' data-y='5'></th>
              <th data-x='6' data-y='5'></th>
            </tr>
            <tr>
              <th data-x='0' data-y='4'></th>
              <th data-x='1' data-y='4'></th>
              <th data-x='2' data-y='4'></th>
              <th data-x='3' data-y='4'></th>
              <th data-x='4' data-y='4'></th>
              <th data-x='5' data-y='4'></th>
              <th data-x='6' data-y='4'></th>
            </tr>
            <tr>
              <th data-x='0' data-y='3'></th>
              <th data-x='1' data-y='3'></th>
              <th data-x='2' data-y='3'></th>
              <th data-x='3' data-y='3'></th>
              <th data-x='4' data-y='3'></th>
              <th data-x='5' data-y='3'></th>
              <th data-x='6' data-y='3'></th>
            </tr>
            <tr>
              <th data-x='0' data-y='2'></th>
              <th data-x='1' data-y='2'></th>
              <th data-x='2' data-y='2'></th>
              <th data-x='3' data-y='2'></th>
              <th data-x='4' data-y='2'></th>
              <th data-x='5' data-y='2'></th>
              <th data-x='6' data-y='2'></th>
            </tr>
            <tr>
              <th data-x='0' data-y='1'></th>
              <th data-x='1' data-y='1'></th>
              <th data-x='2' data-y='1'></th>
              <th data-x='3' data-y='1'></th>
              <th data-x='4' data-y='1'></th>
              <th data-x='5' data-y='1'></th>
              <th data-x='6' data-y='1'></th>
            </tr>
            <tr>
              <th data-x='0' data-y='0'></th>
              <th data-x='1' data-y='0'></th>
              <th data-x='2' data-y='0'></th>
              <th data-x='3' data-y='0'></th>
              <th data-x='4' data-y='0'></th>
              <th data-x='5' data-y='0'></th>
              <th data-x='6' data-y='0'></th>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

}

export default App;
