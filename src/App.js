import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movies from "./components/Movies";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <Movies 
            title="Logan"
          />
        </div>
      </div>
    );
  }
}

export default App;
