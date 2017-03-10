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
      index,
      selectMovie
    } = this.props;

    const background = {
        backgroundImage: "url(" + imgURL + backdropPath + ")",
        backgroundSize: "100% 200%",
        height: "300px",
        width: "80%",
        margin: "auto"
    };

    let names;
    if (this.state.response.cast) {
      names = this.state.response.cast[0].name + ", " + this.state.response.cast[1].name;
    }

    return (
      <a >
        <a 
          className="panel-block is-active"
          onClick={selectMovie(id)}
        >
          <span className="panel-icon">
            <i className="fa fa-book"></i>
          </span>
          <b>{title}</b> {" (" + new Date(releaseDate).getFullYear() + ")  -- " } {names}
        </a>
      </ a>
    );
  }
}

export default Movie;
