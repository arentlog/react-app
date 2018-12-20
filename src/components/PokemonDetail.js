import React from 'react';
import '../styles/PokemonDetail.css';
import axios from 'axios';

// TODO: DO SOMETHING
export default class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    axios.get('http://pokeapi.salestock.net/api/v2/pokemon/' + this.props.id)
      .then(res => {
        const data = res.data;
        this.setState({
          data: data
        });
    });
  }
  
  render() {
    if (!this.state.data) {
      return (
        <div>Loading Pokemon Data...</div>
      );
    }

    return (
      <>
        <h1>{this.state.data.name} #{this.props.id}</h1>
        <img src={this.state.data.sprites.front_default} alt="poke"></img>

        <p>Type: {this.state.data.types.map(t => <span key={t.slot}>{t.type.name} </span>)}</p>

        <p>Height: {this.state.data.height}</p>
        <p>Weight: {this.state.data.weight}</p>

        <p>Abilities</p>
        <ol>
          {this.state.data.abilities.map(a => <li key={a.ability.name}>{a.ability.name}</li>)}
        </ol>

        <p>Moves</p>
        <ol>
          {this.state.data.moves.map(m => <li key={m.move.name}>{m.move.name}</li>)}
        </ol>
      </>
    );
  }
}
