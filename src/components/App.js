import React from 'react';
import { Switch, Route } from 'react-router-dom';
import '../styles/App.css';
import Home from './Home';
import Board from './Board';
import Pokemon from './Pokemon';
import NavBar from './NavBar';
import PokemonDetail from './PokemonDetail';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <NavBar />
        <div className="main-content">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/board' render={() => (
              <Board onClick={i => console.log('Button clicked:', i)}/>
            )}/>
            <Route exact path='/pokemon' component={Pokemon}/>
            <Route exact path='/pokemon/:id' component={(props) => <PokemonDetail id={props.match.params.id} />}/>
          </Switch>
        </div>
      </div>
    );
  }
}
