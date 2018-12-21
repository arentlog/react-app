import React from 'react';
import '../styles/Pokemon.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

function getPokemonId(url) {
  return url.substring(34, url.length - 1);
}

function toTitleCase(str) {
  return str.replace(
      /\w\S*/g,
      function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
  );
}

export default class Pokemon extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: []
    }
  }

  componentDidMount() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=784`)
      .then(res => {
        const pokemon = res.data.results;
        this.setState({ pokemon });
    });
  }
  
  render() {
    if (this.state.pokemon.length === 0) {
      return (
        <div className="progress-div">
          <CircularProgress />
        </div>
      );
    }

    return (
      <ol>
        {this.state.pokemon.map(p => <li key={p.url}><Link to={'/pokemon/' + getPokemonId(p.url)} className="pokemon">{toTitleCase(p.name)}</Link></li>)}
      </ol>
    );
  }
}
