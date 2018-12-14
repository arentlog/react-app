import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import Button from '@material-ui/core/Button';

export default class NavBar extends React.Component {

  render() {
    return (
      <div className="nav-bar">
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Button variant="contained" className="nav-bar-button">
            Home
          </Button>
        </Link>
        <Link to='/board' style={{ textDecoration: 'none' }}>
          <Button variant="contained" className="nav-bar-button">
            Board
          </Button>
        </Link>
        <Link to='/pokemon' style={{ textDecoration: 'none' }}>
          <Button variant="contained" className='nav-bar-button'>
            Pokemon
          </Button>
        </Link>
      </div>
    );
  }
}
