import {API_KEY} from "../util/constants";

export function getMovieDetails(id) {
   fetch(new Request("movie/" + id + "/credits" + API_KEY))
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