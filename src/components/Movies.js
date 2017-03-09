import React, { Component } from 'react';

import Movie from "./Movie";

// const tmdbURL = "https://api.themoviedb.org/3/movie/76341?api_key={api_key}";
// const omdbURL = "http://www.omdbapi.com/?";

// Containst api_key
const tmdbURL = "https://api.themoviedb.org/3/";
const api_key = "?api_key=4a49da4a24dd25aba0ffba3f451d1f60"

// search/movie?api_key=4a49da4a24dd25aba0ffba3f451d1f60&query=X-Men

class Movies extends Component {

  constructor(props) {
    super(props);
    this.state = {response: {results: []}}
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.title === "") {
      return;
    }

    const init = {
      method: 'GET',
      headers: new Headers(),
      mode: 'no-cors',
      cache: 'default' 
    };
    fetch(new Request("search/movie/" + api_key + "&page=1&query=" + nextProps.title))
      .then((response) => {
        return Promise.resolve(response);
      }) 
      .then((value) => {
        return value.json();
      })
      .then((parsed) => {
        this.setState({response: parsed});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const {
      title
    } = this.props;

    let response = this.state.response;

     const moviePanel = response === undefined ?
        <p>wait</p> :
          response.results.map((movie, index) =>{
            return <Movie 
            title={movie.original_title}
            releaseDate={movie.release_date}
            overview={movie.overview}
            posterPath={movie.poster_path}
            backdropPath={movie.backdrop_path}
            id={movie.id}
            genreIds={movie.genre_ids}
            userRating={movie.vote_average}
            key={index}
            index={index + 1}
            />});

    return (
      <div>
         {moviePanel}
      </div>
    );
  }
}

export default Movies;
