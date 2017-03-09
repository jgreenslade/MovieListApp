import React, { Component } from 'react';

import Movie from "./Movie";

// const tmdbURL = "https://api.themoviedb.org/3/movie/76341?api_key={api_key}";
// const omdbURL = "http://www.omdbapi.com/?";

// Containst api_key
const tmdbURL = "https://api.themoviedb.org/3/";
const api_key = "?api_key=4a49da4a24dd25aba0ffba3f451d1f60"

// search/movie?api_key=4a49da4a24dd25aba0ffba3f451d1f60&query=X-Men

let response;

class Movies extends Component {

  componentWillMount() {
    fetch(tmdbURL + "search/movie/" + api_key + "&query=" + this.props.title)
      .then((response) => {
        return Promise.resolve(response);
      }) 
      .then((value) => {
        return value.json();
      })
      .then((parsed) => {
        response = parsed;
        this.setState({});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const {
      title
    } = this.props;

    const allMovies = response ? response.results : null;

    return (
      <div className="movie">
          {response === undefined ?
            <p>wait</p> :
            <div>
            {
              allMovies.map((movie, index) =>{
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
               />})
            }
            </div>
          }
      </div>
    );
  }
}

export default Movies;
