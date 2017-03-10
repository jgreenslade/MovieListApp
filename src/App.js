import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MoviePage from "./components/MoviePage";
import SearchBar from "./components/SearchBar";

import 'bulma/css/bulma.css'

function selectMovie(id) {
  this.setState({id: id});
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {id: -1};

    this.selectMovie = selectMovie.bind(this);
  }
  render() {
    return (
      <div>
      <nav className="nav">
        <div className="nav-left">
          <a className="nav-item">
            <h1 className="title">Movie List App V1</h1>
          </a>
          <SearchBar 
            selectMovie={this.selectMovie}
          />
        </div>
      </nav>
      <MoviePage 
        id={this.state.id}
      />
      </div>
    );
  }
}

export default App;
