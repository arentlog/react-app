import React from 'react';
import '../styles/Pokemon.css';
import axios from 'axios';

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
    })
  }
  
  render() {
    return (
      <ol>
        {this.state.pokemon.map(p => <li key={p.url}>{p.name}</li>)}
      </ol>
    );
  }
}
