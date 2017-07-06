import React, { Component } from 'react';
import './App.css';

class Square extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('square number', this.props.num);
    this.props.changeSquare(this.props.num);
  }
  render() {
    if (this.props.piece === '-') {
      return (
        <span className="square" onClick={this.handleClick}>-</span>
      );
    } else if (this.props.piece === 'x') {
      return (
        <span className="square" onClick={this.handleClick}>
          <img src="https://image.ibb.co/mYWyhv/Rubber_Duck_200px.png" alt="Rubber Duck 200px" />
        </span>
      );
    } else {
      return (
        <span className="square" onClick={this.handleClick}>
          <img src="https://image.ibb.co/c34haF/goose_canadian400px_200px.png" alt="goose canadian400px 200px" />
        </span>
      );
    }
  }
}

export default Square;

