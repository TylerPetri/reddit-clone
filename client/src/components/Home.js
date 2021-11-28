import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Trending from './Trending';

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Trending />
      </Container>
    </React.Fragment>
  );
}
