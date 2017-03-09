import React, { Component } from 'react';

import {getMovieDetails} from "../util/fetchUtil";

// const tmdbURL = "https://api.themoviedb.org/3/movie/76341?api_key={api_key}";
// const omdbURL = "http://www.omdbapi.com/?";

// Containst api_key
const imgURL = "https://image.tmdb.org/t/p/w500";
const movieURL = "https://api.themoviedb.org/3/"

// search/movie?api_key=4a49da4a24dd25aba0ffba3f451d1f60&query=X-Men

class Movie extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      response: {}};
    
    this.getMovieDetails = getMovieDetails.bind(this);
  }

   componentWillMount() {
    if (!this.props.id) {
      return;
    }
    this.getMovieDetails(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.id) {
      return;
    }
    this.getMovieDetails(nextProps.id);
  }

  render() {
    const {
      title,
      releaseDate,
      overview,
      posterPath,
      backdropPath,
      id,
      genreIds,
      userRating,
      index
    } = this.props;

    const background = {
        backgroundImage: "url(" + imgURL + backdropPath + ")",
        backgroundSize: "100% 200%",
        height: "300px",
        width: "80%",
        margin: "auto"
    };

    const expanded = <div >
        <div style={background}>
          <h2>{index + "  --  " + title + " (" + releaseDate + ")  -- " }<b>{userRating}</b></h2>
          <p>{overview}</p>
          </div>
      </div>;

    let names;
    if (this.state.response.cast) {
      names = this.state.response.cast[0].name + ", " + this.state.response.cast[1].name;
    }

    /*const collapsed = <div>
        <h2>{index + "  --  " + title + " (" + releaseDate + ")  -- " }<b>{userRating}</b> {names}</h2>
    </div>;*/

    const collapsed = 
    <a className="panel-block is-active">
        <span className="panel-icon">
          <i className="fa fa-book"></i>
        </span>
        <b>{title}</b> {" (" + new Date(releaseDate).getFullYear() + ")  -- " } {names}
    </a>;

    return (
      <a onClick={() => {this.setState({expand: !this.state.expand, response: this.state.response})}}>
        {this.state.expand ? expanded : collapsed}
      </ a>
    );
  }
}

export default Movie;
