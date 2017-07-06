import React, { Component } from 'react';
import './App.css';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pieces: [
        ['x', 'x', 'o'],
        ['o', 'o', 'o'],
        ['x', 'x', 'o'],
      ]
    };
  }

  render() {
    return (
      <div >
        Welcome to my tictactoe game!
        <table className="board"> 
          <tr>
            <td>
              {this.state.pieces[0][0]} | {this.state.pieces[0][1]} | {this.state.pieces[0][2]}
            </td>
          </tr>
          <tr>
            <td>
              {this.state.pieces[1][0]} | {this.state.pieces[1][1]} | {this.state.pieces[1][2]}
            </td>
          </tr>
          <tr>
            <td>
              {this.state.pieces[2][0]} | {this.state.pieces[2][1]} | {this.state.pieces[2][2]}
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Board;

