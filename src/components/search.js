import React from 'react';
import { Paper, InputBase, IconButton, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = ({ handleSubmit, handleChange }) => {
  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center',
      mt: 3,
      mb: 3 
    }}>
      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          maxWidth: 600,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search for movies..."
          onChange={handleChange}
          inputProps={{ 'aria-label': 'search movies' }}
        />
        <IconButton type="submit" sx={{ p: '10px', color: 'primary.main' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default Search;
