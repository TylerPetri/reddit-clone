import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Trending from './Trending';
import PopularPosts from './Popular Posts/Popular_Posts';

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
          <PopularPosts />
        </Box>
      </Container>
    </React.Fragment>
  );
}
