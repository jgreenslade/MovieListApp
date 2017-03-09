import React, { Component } from 'react';

// const tmdbURL = "https://api.themoviedb.org/3/movie/76341?api_key={api_key}";
// const omdbURL = "http://www.omdbapi.com/?";

// Containst api_key
const tmdbURL = "https://api.themoviedb.org/3/";
const imgURL = "https://image.tmdb.org/t/p/w500";
const api_key = "?api_key=4a49da4a24dd25aba0ffba3f451d1f60"

// search/movie?api_key=4a49da4a24dd25aba0ffba3f451d1f60&query=X-Men

class Movie extends Component {

  render() {
    const {
      title,
      releaseDate,
      overview,
      posterPath,
      backdropPath,
      id,
      genreIds,
      userRating
    } = this.props;

    const background = {
        backgroundImage: "url(" + imgURL + backdropPath + ")",
        backgroundSize: "30% 100%",
        backgroundRepeat: "no-repeat",
        
    };

    console.log(background);

    return (
      <div style={background}>
          <h2>{title + " (" + releaseDate + ")  -- " }<b>{userRating}</b></h2>
          <p>{overview}</p>
      </div>
    );
  }
}

export default Movie;
