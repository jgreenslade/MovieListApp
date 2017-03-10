import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MoviePage from "./components/MoviePage";
import SearchBar from "./components/SearchBar";

import 'bulma/css/bulma.css'

function selectMovie(id) {

}

class App extends Component {
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
      <MoviePage />
      </div>
    );
  }
}

export default App;
