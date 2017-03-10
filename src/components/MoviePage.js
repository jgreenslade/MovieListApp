import React, { Component } from 'react';

import {getMovieDetails} from "../util/fetchUtil";

// const tmdbURL = "https://api.themoviedb.org/3/movie/76341?api_key={api_key}";
// const omdbURL = "http://www.omdbapi.com/?";

// Containst api_key
const imgURL = "https://image.tmdb.org/t/p/w500";
const movieURL = "https://api.themoviedb.org/3/"

// search/movie?api_key=4a49da4a24dd25aba0ffba3f451d1f60&query=X-Men

class MoviePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      response: {}};
    
    this.getMovieDetails = getMovieDetails.bind(this);
  }

  //  componentWillMount() {
  //   if (!this.props.id) {
  //     return;
  //   }
  //   this.getMovieDetails(this.props.id);
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (!nextProps.id) {
  //     return;
  //   }
  //   this.getMovieDetails(nextProps.id);
  // }

  render() {
    const {
      id
    } = this.props;

    // const cast = this.state.response.cast;
    // const crew = this.state.response.crew;

    return (
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-vertical">
            <div className="tile">
              <div className="tile is-parent is-4">
                <article className="tile is-child notification is-info">
                  <p className="title">Poster</p>
                  <p className="subtitle">The poster for the movie</p>
                  <figure className="image is-4by3">
                    <img src="http://bulma.io/images/placeholders/640x480.png" />
                  </figure>
                </article>
              </div>
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification is-primary">
                  <p className="title">TITLE OF THE MOVIE</p>
                  <p className="subtitle">Description</p>
                </article>
                <article className="tile is-child notification is-warning">
                  <p className="title">CAST AND CREW</p>
                  <p className="subtitle">Bottom tile</p>
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-danger">
                <p className="title">Wide tile</p>
                <p className="subtitle">Aligned with the right tile</p>
                <div className="content">
                  asdfhklajshdfk
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MoviePage;
