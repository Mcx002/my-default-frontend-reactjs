import React from 'react';
import '../sass/App.sass';
import { PaperDefault } from '../components/PaperDefault';
import { Container, Stack } from '@mui/material';
import MImage from '../components/MImage';
import myImage from '../images/swafoto2.jpg';

const App = () => {
  return (
    <Container className="app">
      <PaperDefault>
        <Stack spacing={2} justifyContent="center" alignItems="center">
          <MImage src={myImage} alt="my selfie" width="75px" height="75px" rounded />
          <p>This is my default frontend app</p>
        </Stack>
      </PaperDefault>
    </Container>
  );
}

export default App;
