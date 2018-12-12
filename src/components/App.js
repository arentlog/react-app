import React from 'react';
import '../styles/App.css';
import Board from './Board';
import NavBar from './NavBar';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <NavBar />
        <div className="main-content">
          <Board onClick={i => console.log('Button clicked:', i)} />
        </div>
      </div>
    );
  }
}
