import React, { Component } from 'react';

// const tmdbURL = "https://api.themoviedb.org/3/movie/76341?api_key={api_key}";
// const omdbURL = "http://www.omdbapi.com/?";

// Containst api_key
const api_key = "?api_key=4a49da4a24dd25aba0ffba3f451d1f60";
const imgURL = "https://image.tmdb.org/t/p/w500";
const movieURL = "https://api.themoviedb.org/3/"

// search/movie?api_key=4a49da4a24dd25aba0ffba3f451d1f60&query=X-Men

class Movie extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      response: {}};
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.id) {
      return;
    }
    const init = {
      mode: 'cors'
    };
    fetch(new Request("movie/" + nextProps.id + "" + api_key))
      .then((response) => {
        return Promise.resolve(response);
      }) 
      .then((value) => {
        return value.json();
      })
      .then((parsed) => {
        this.setState({
          expanded: this.state.expanded,
          response: parsed});
      })
      .catch((error) => {
        console.error(error);
      });
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

    const collapsed = <div>
        <h2>{index + "  --  " + title + " (" + releaseDate + ")  -- " }<b>{userRating}</b></h2>
    </div>;

    return (
      <a onClick={() => {this.setState({expand: !this.state.expand, response: this.state.response})}}>
        {this.state.expand ? expanded : collapsed}
      </ a>
    );
  }
}

export default Movie;
