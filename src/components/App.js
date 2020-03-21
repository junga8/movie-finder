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
      currentMovie: null
    };
    this.apiKey = process.env.REACT_APP_API;
  }

  handleChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  viewMovieInfo = id => {
    const filteredMovie = this.state.movies.filter(movie => movie.id == id);
    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;

    this.setState({ currentMovie: filteredMovie });
  };

  closMovieinfo = () => {
    this.setState({ currentMovie: null });
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

  //release_date
  //console.log(data.results[0].release_date);

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
    const sortedMovies = this.state.movies.sort((a, b) => {});
    const numberPages = Math.floor(this.state.totalResults / 20);
    return (
      <div className="App">
        <Nav />
        {this.state.currentMovie == null ? (
          <div>
            {" "}
            <Search
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />{" "}
            <MovieList
              viewMovieInfo={this.viewMovieInfo}
              movies={sortedMovies}
            />
          </div>
        ) : (
          <MovieInfo closMovieinfo={this.closMovieinfo} />
        )}

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
