import React from 'react';
import '../styles/Pokemon.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function getPokemonId(url) {
  return url.substring(34, url.length - 1);
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
    return (
      <ol>
        {this.state.pokemon.map(p => <li key={p.url}><Link to={'/pokemon/' + getPokemonId(p.url)} style={{ textDecoration: 'none' }}>{p.name}</Link></li>)}
      </ol>
    );
  }
}
