import React from 'react';
import '../styles/PokemonDetail.css';
import axios from 'axios';

// TODO: DO SOMETHING
export default class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      abilities: []
    }
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon/' + this.state.id)
      .then(res => {
        const abilities = res.data.abilities;
        this.setState({ abilities });
    })
  }
  
  render() {
    return (
      <ol>
        {this.state.abilities.map(p => <li key={p.ability.name}>{p.ability.name}</li>)}
      </ol>
    );
  }
}
