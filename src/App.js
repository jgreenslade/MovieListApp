import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movies from "./components/Movies";
import SearchBar from "./components/SearchBar";

import 'bulma/css/bulma.css'

class App extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav-left">
          <a className="nav-item">
            <h2>Movie List App V1</h2>
          </a>
          <SearchBar />
        </div>
      </nav>
    );
  }
}

export default App;
