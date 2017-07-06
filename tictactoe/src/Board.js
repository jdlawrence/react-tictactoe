import React, { Component } from 'react';
import './App.css';
import Square from './Square';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pieces: ['-', '-', '-', '-', '-', '-', '-', '-', '-'],
      turn: 'x'
    };

    this.changeSquare = this.changeSquare.bind(this);
    this.resetBoard = this.resetBoard.bind(this);
  }

  resetBoard() {
    this.setState({
      pieces: ['-', '-', '-', '-', '-', '-', '-', '-', '-']
    });
  }

  changeSquare(squareNum) {
    if (this.state.pieces[squareNum] === '-') {
      if (this.state.turn === 'x') {
        this.setState({
          turn: 'o'
        });
      } else {
        this.setState({
          turn: 'x'
        });
      }
      var newPieces = this.state.pieces.slice(0, squareNum)
        .concat(this.state.turn)
        .concat(this.state.pieces.slice(squareNum + 1));
      this.setState({ pieces: newPieces });
    }

  }
  render() {
    return (
      <div className="board">
        Welcome to my tictactoe game!
        <div>
          <button onClick={this.resetBoard}>reset the board</button>
        </div>
        <table className="grid">
          <tbody>
            <tr>
              <td>
                <Square
                  num={0}
                  piece={this.state.pieces[0]}
                  changeSquare={this.changeSquare}
                /> {''.replace(/ /g, "\u00a0")}
                <Square
                  num={1}
                  piece={this.state.pieces[1]}
                  changeSquare={this.changeSquare}
                /> {''.replace(/ /g, "\u00a0")}
                 <Square
                  num={2}
                  piece={this.state.pieces[2]}
                  changeSquare={this.changeSquare}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Square
                  num={3}
                  piece={this.state.pieces[3]}
                  changeSquare={this.changeSquare}
                /> {''.replace(/ /g, "\u00a0")}
                <Square
                  num={4}
                  piece={this.state.pieces[4]}
                  changeSquare={this.changeSquare}
                /> {''.replace(/ /g, "\u00a0")}
                 <Square
                  num={5}
                  piece={this.state.pieces[5]}
                  changeSquare={this.changeSquare}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Square
                  num={6}
                  piece={this.state.pieces[6]}
                  changeSquare={this.changeSquare}
                /> {''.replace(/ /g, "\u00a0")}
                <Square
                  num={7}
                  piece={this.state.pieces[7]}
                  changeSquare={this.changeSquare}
                /> {''.replace(/ /g, "\u00a0")}
                 <Square
                  num={8}
                  piece={this.state.pieces[8]}
                  changeSquare={this.changeSquare}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Board;

