import React from 'react';
import '../styles/NavBar.css';

export default class NavBar extends React.Component {

  render() {
    return (
      <div className="nav-bar">
        <button onClick={() => console.log('Logan')}>Logan</button>
        <button onClick={() => console.log('Pokemon')}>Pokemon</button>
      </div>
    );
  }
}
