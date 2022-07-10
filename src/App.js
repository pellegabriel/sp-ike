import React, { Component } from "react";
import { Title } from "./component/title";
import SearchFrom from "./component/SearchForm";
import { MoviesList } from "./component/MoviesList";

import "./App.css";
import "bulma/css/bulma.css";

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
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">
          <SearchFrom onResults={this._handleResults} />
        </div>
        {this.state.usedSearch ? (
          this._renderResults()
        ) : (
          <small>Use the form search a movie c:</small>
        )}
      </div>
    );
  }
}

export default App;
