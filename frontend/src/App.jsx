import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function App() {

  const search = () => {
    console.log('search');
  }

  return (
    <>
      <Container maxWidth="xl"
        sx={{
          backgroundColor: 'black',
          marginTop: 0,
          marginLeft: 'auto',
          height: '100vh',
          width: '100vw',
          position: 'relative',
        }}
      >
        <TextField sx={{
          marginTop: '1rem',
          backgroundColor: 'white',
          width: '80vw',
        }}
          fullWidth placeholder="type your search phrase here" id="fullWidth" />
        <IconButton aria-label="search" onClick={search}>
          <SearchIcon sx={{
            marginTop: '1rem',
            color: 'white',
            fontSize: '3rem'
          }}
          />
        </IconButton>
      </Container>
    </>
  )
}

export default App
