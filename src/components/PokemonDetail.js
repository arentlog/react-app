import React from 'react';
import '../styles/PokemonDetail.css';
import axios from 'axios';
import { Tooltip, CircularProgress } from '@material-ui/core';

function toTitleCase(str) {
  return str.replace(
      /\w\S*/g,
      function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
  );
}

function openInNewTab(url) {
  window.open(url, '_blank');
}

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
        <div className="progress-div">
          <CircularProgress />
        </div>
      );
    }

    return (
      <>
        <h1>{toTitleCase(this.state.data.name)} #{this.props.id}</h1>
        <Tooltip title="See on Bulbapedia" placement="right">
          <img src={this.state.data.sprites.front_default} alt="poke" onClick={() => openInNewTab('https://bulbapedia.bulbagarden.net/wiki/'+ toTitleCase(this.state.data.name) + '_(Pokémon)')}></img>
        </Tooltip>

        <p>Type: {this.state.data.types.map(t => <span key={t.slot} className={t.type.name}>{t.type.name} </span>)}</p>

        <p>Height: {this.state.data.height}</p>
        <p>Weight: {this.state.data.weight}</p>

        <p>Abilities</p>
        <ul>
          {this.state.data.abilities.map(a =>
            <li key={a.ability.name}>
              <Tooltip title="See on Bulbapedia" placement="right">
                <span className="ability" onClick={() => openInNewTab('https://bulbapedia.bulbagarden.net/wiki/' + toTitleCase(a.ability.name.replace(/-/g,' ')) + '_(Ability)')}>{toTitleCase(a.ability.name.replace(/-/g,' '))}</span>
              </Tooltip>
            </li>
          )}
        </ul>

        <p>Moves</p>
        <ul>
          {this.state.data.moves.map(m =>
              <li key={m.move.name}>
                <Tooltip title="See on Bulbapedia" placement="right">
                  <span className="move" onClick={() => openInNewTab('https://bulbapedia.bulbagarden.net/wiki/' + toTitleCase(m.move.name.replace(/-/g,' ')) + '_(move)')}>{toTitleCase(m.move.name.replace(/-/g,' '))}</span>
                </Tooltip>
              </li>
          )}
        </ul>
      </>
    );
  }
}
