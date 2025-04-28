import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { Rating } from '@mui/material';

const MovieList = ({ movies, viewMovieInfo }) => {
  return (
    <Grid container spacing={4} sx={{ mt: 2 }}>
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
            onClick={() => viewMovieInfo(movie)}
          >
            <CardMedia
              component="img"
              height="400"
              image={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://via.placeholder.com/500x750.png?text=No+Poster+Available"
              }
              alt={movie.title}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h6" component="h2">
                {movie.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {movie.release_date ? movie.release_date.split('-')[0] : 'N/A'}
              </Typography>
              <Rating 
                value={movie.vote_average / 2} 
                precision={0.5} 
                readOnly
              />
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Rating: {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}/10
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
