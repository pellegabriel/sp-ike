import React, { Component } from "react";
import { Title } from "./components/Title";
import SearchFrom from "./components/SearchForm";
import { MoviesList } from "./components/MoviesList";

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
