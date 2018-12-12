import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

export default class NavBar extends React.Component {

  render() {
    return (
      <div className="nav-bar">
        <Link to='/'>Home</Link>
        <Link to='/board'>Board</Link>
        <Link to='/pokemon'>Pokemon</Link>
      </div>
    );
  }
}
