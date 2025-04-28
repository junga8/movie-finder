import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Container } from '@mui/material';
import { Rating } from '@mui/material';

const TopMovies = ({ onMovieClick }) => {
  const [movies, setMovies] = useState([]);
  const API_KEY = '34f71ed9b57295361e5081c91ba416d7';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results.slice(0, 10));
      })
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ 
        textAlign: 'center', 
        mb: 4,
        color: '#e57373' // Matching the theme color
      }}>
        Top 10 Movies of All Time
      </Typography>
      <Grid container spacing={4}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} key={movie.id}>
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: '0.3s',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.12)'
                }
              }}
              onClick={() => onMovieClick(movie)}
            >
              <CardMedia
                component="img"
                height="400"
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h2">
                  {movie.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {movie.release_date.split('-')[0]}
                </Typography>
                <Rating 
                  value={movie.vote_average / 2} 
                  precision={0.5} 
                  readOnly
                />
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Rating: {movie.vote_average.toFixed(1)}/10
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TopMovies; 