import React, { useState } from 'react';
import Nav from './navbar';
import Search from './search';
import TopMovies from './TopMovies';
import MovieList from './movieList';
import MovieInfo from './MovieInfo';
import { ThemeProvider, createTheme } from '@mui/material';
import { Container } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e57373', // Light red to match the header
    },
    secondary: {
      main: '#2196f3',
    },
  },
});

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentMovie, setCurrentMovie] = useState(null);
  const API_KEY = '34f71ed9b57295361e5081c91ba416d7';

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`
      )
        .then((data) => data.json())
        .then((data) => {
          setSearchResults(data.results);
        })
        .catch((error) => console.error('Error searching movies:', error));
    }
  };

  const viewMovieInfo = (movie) => {
    setCurrentMovie(movie);
  };

  const closeMovieInfo = () => {
    setCurrentMovie(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Nav />
        <Container>
          {!currentMovie && (
            <Search handleChange={handleChange} handleSubmit={handleSubmit} />
          )}
          {currentMovie ? (
            <MovieInfo currentMovie={currentMovie} closeMovieInfo={closeMovieInfo} />
          ) : searchResults.length > 0 ? (
            <MovieList movies={searchResults} viewMovieInfo={viewMovieInfo} />
          ) : (
            <TopMovies onMovieClick={viewMovieInfo} />
          )}
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
