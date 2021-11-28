import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Trending from './Trending';
import Popular from './Popular';

export default function Home() {
  const flexColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Box sx={flexColumnStyle}>
          <Trending />
          <Popular />
        </Box>
      </Container>
    </React.Fragment>
  );
}
