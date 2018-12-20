import React from 'react';
import '../styles/PokemonDetail.css';
import axios from 'axios';

// TODO: DO SOMETHING
export default class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      abilities: [],
      height: 0,
      moves: [],
      name: ''
    }
  }

  componentDidMount() {
    axios.get('http://pokeapi.salestock.net/api/v2/pokemon/' + this.props.id)
      .then(res => {
        const data = res.data;
        this.setState({ abilities: data.abilities, height: data.height, moves: data.moves, name: data.name });
    });
  }
  
  render() {
    if (this.state.name === '') {
      return (
        <div>Loading Pokemon Data...</div>
      );
    }

    return (
      <>
        <h1>{this.state.name} #{this.props.id}</h1>

        <p>Height: {this.state.height}</p>

        <p>Abilities</p>
        <ol>
          {this.state.abilities.map(p => <li key={p.ability.name}>{p.ability.name}</li>)}
        </ol>

        <p>Moves</p>
        <ol>
          {this.state.moves.map(p => <li key={p.move.name}>{p.move.name}</li>)}
        </ol>
      </>
    );
  }
}
