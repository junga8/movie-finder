import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';

const Nav = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#e57373' }}>
      <Container>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <MovieIcon sx={{ mr: 2 }} />
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
            Movie Finder
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;
