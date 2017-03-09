import React, { Component } from 'react';

import Movies from "./Movies";

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {title: ""}
    }

  render() {
    const {
      title
    } = this.props;

    let searchValue = this.state.title;

    return (
      <div className="movie">
        <input type="search" id="search-bar" />
        <button onClick={() => {
            this.setState({title: document.getElementById('search-bar').value});
        }}>
            search
        </ button>
        <Movies
            title={searchValue}
        />
      </div>
    );
  }
}

export default SearchBar;
