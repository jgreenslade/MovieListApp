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
    <a className="nav-item">
        <p className="control has-addons">
                <input className="input" type="search" id="search-bar" placeholder="Search for Movies..."/>
                <button className="button" onClick={() => {
                    this.setState({title: document.getElementById('search-bar').value});
                }}>search</ button>
            </p>
        <nav className="panel">
        <div className="panel-block">
            </div>
            <Movies
                title={searchValue}
            />
        
        </nav>
      </a>
    );
  }
}

export default SearchBar;
