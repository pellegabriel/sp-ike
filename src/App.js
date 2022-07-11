import React, { Component } from "react";
import { Title } from "./components/Title";
import SearchFrom from "./components/SearchForm";
import { MoviesList } from "./components/MoviesList";
//import{BrowserRouter, Route, Routes} from 'react-router-dom'

import "./App.css";
import "bulma/css/bulma.css";
import { Detail } from "./pages/Details";

class App extends Component {
  state = { usedSearch: false, results: [] };

  _handleResults = (results) => {
    this.setState({ results, usedSearch: true });
  };
  _renderResults() {
    return this.state.results.length === 0 ? (
      <p>Sorry! Results not found...</p>
    ) : (
      <MoviesList movies={this.state.results} />
    );
  }

  render() {
    const url = new URL(document.location);
    const hasId = url.searchParams.has("id");

    if (hasId) {
      return (
        <div className="Detail">
          <Detail id={url.searchParams.get("id")} />
        </div>
      );
    }
    return (
      //<BrouserRouter>
      // <Route path='/abaut' element={<div>About</div>} />
      // </BrouserRouter>
      //https://www.youtube.com/watch?v=7xRVnmWcTE8&ab_channel=FaztCodehttps://www.youtube.com/watch?v=7xRVnmWcTE8&ab_channel=FaztCode
      //seguir el tuto

      <div className="App">
        <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">
          <SearchFrom onResults={this._handleResults} />
        </div>
        {this.state.usedSearch ? (
          this._renderResults()
        ) : (
          <small className="small">Use the form search a movie c:</small>
        )}
      </div>
    );
  }
}

export default App;
