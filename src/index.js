import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Board from './components/board.js';

class App extends React.Component {

  handleClick(i) {
    console.log('Button clicked:', i);
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board onClick={i => this.handleClick(i)} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));