import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Paper, IconButton, Grid, Select, MenuItem, FormControl, InputLabel, CircularProgress } from '@mui/material';
import { Rating } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { translateText } from '../utils/translate';

const MovieInfo = ({ currentMovie, closeMovieInfo }) => {
  const [language, setLanguage] = useState('English');
  const [translatedTitle, setTranslatedTitle] = useState(currentMovie.title);
  const [translatedOverview, setTranslatedOverview] = useState(currentMovie.overview);
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    const translateContent = async () => {
      if (language === 'English') {
        setTranslatedTitle(currentMovie.title);
        setTranslatedOverview(currentMovie.overview);
        return;
      }

      setIsTranslating(true);
      try {
        const [newTitle, newOverview] = await Promise.all([
          translateText(currentMovie.title, language),
          translateText(currentMovie.overview, language)
        ]);
        setTranslatedTitle(newTitle);
        setTranslatedOverview(newOverview);
      } catch (error) {
        console.error('Translation error:', error);
      } finally {
        setIsTranslating(false);
      }
    };

    translateContent();
  }, [language, currentMovie]);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ mb: 4 }}>
        <IconButton 
          onClick={closeMovieInfo}
          sx={{ 
            color: 'primary.main',
            '&:hover': {
              backgroundColor: 'rgba(229, 115, 115, 0.1)'
            }
          }}
        >
          <ChevronLeftIcon />
          <Typography sx={{ ml: 1 }}>Go Back</Typography>
        </IconButton>
      </Box>

      <Paper elevation={3} sx={{ p: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <img
              src={
                currentMovie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`
                  : "https://via.placeholder.com/500x750.png?text=No+Poster+Available"
              }
              alt={`Poster for ${currentMovie.title}`}
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel id="language-select-label">Language</InputLabel>
              <Select
                labelId="language-select-label"
                id="language-select"
                value={language}
                label="Language"
                onChange={handleLanguageChange}
                disabled={isTranslating}
              >
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="German">German</MenuItem>
                <MenuItem value="French">French</MenuItem>
                <MenuItem value="Nepali">Nepali</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={8}>
            {isTranslating ? (
              <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
                <CircularProgress color="primary" />
              </Box>
            ) : (
              <>
                <Typography variant="h4" component="h1" gutterBottom color="primary">
                  {translatedTitle}
                </Typography>
                
                <Typography variant="h6" gutterBottom color="text.secondary">
                  Release Date: {new Date(currentMovie.release_date).toLocaleDateString()}
                </Typography>

                <Box sx={{ my: 2 }}>
                  <Typography variant="body1" paragraph>
                    {translatedOverview}
                  </Typography>
                </Box>

                <Box sx={{ mt: 3 }}>
                  <Typography component="legend" variant="h6" gutterBottom>
                    Rating
                  </Typography>
                  <Rating
                    value={currentMovie.vote_average / 2}
                    precision={0.5}
                    readOnly
                    size="large"
                  />
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    {currentMovie.vote_average.toFixed(1)}/10
                  </Typography>
                </Box>

                {currentMovie.vote_count && (
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                    Based on {currentMovie.vote_count.toLocaleString()} votes
                  </Typography>
                )}
              </>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default MovieInfo;
