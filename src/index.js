import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
export default class App extends React.Component {
  state = {
    // vytvori promenou komponenty
    beers: []
  };
  constructor() {
    super();
    this.getBeers();
  }

  getBeers() {
    fetch("https://api.punkapi.com/v2/beers")
      .then(data => data.json()) // napojeni na predchozi funkci(fetch)
      .then(beers => {
        this.setState({ beers });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let beerNames = this.state.beers.map(beer => (
      <li>
        {beer.name}:{beer.tagline}
      </li>
    ));
    //return <div>Dobrý den.{JSON.stringify(this.state.beers)}</div>; // vypsani pole beers jako string
    return <ol>{beerNames}</ol>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
