import React, { Component } from "react";
import Nav from "./navbar";
import Search from "./search";
import MovieList from "./movieList";
import Pagination from "./Pagination";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: "",
      totalResults: 0,
      currentPage: 1,
      sort: ""
    };
    this.apiKey = process.env.REACT_APP_API;
  }

  handleChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=34f71ed9b57295361e5081c91ba416d7&query=" +
        this.state.searchTerm
    )
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({
          movies: [...data.results],
          totalResults: data.total_results
        });
      });
  };

  handleSort = e => {
    console.log(e.target.value);
    this.setState({ sort: e.target.value });
  };

  nextPage = pageNumber => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=34f71ed9b57295361e5081c91ba416d7&query=${this.state.searchTerm}&page=${pageNumber}`
    )
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({ movies: [...data.results], currentPage: pageNumber });
      });
  };

  render() {
    const numberPages = Math.floor(this.state.totalResults / 20);
    return (
      <div className="App">
        <Nav />
        <Search
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleSort={this.handleSort}
        />
        <MovieList movies={this.state.movies} />
        {this.state.totalResults > 20 ? (
          <Pagination
            pages={numberPages}
            nextPage={this.nextPage}
            currentPage={this.state.currentPage}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default App;
