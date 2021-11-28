import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export default function Trending() {
  const wrapper = {
    bgcolor: '#000000',
    height: '235px',
    overflow: 'hidden',
  };

  return (
    <>
      <Box sx={wrapper} mt={3}>
        <h5 style={{ margin: '0 10px' }}>Trending today</h5>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              flexGrow: 1,
              m: 1,
              width: 250,
              height: 200,
            },
          }}
        >
          <Paper elevation={0} />
          <Paper />
          <Paper elevation={3} />
          <Paper elevation={4} />
        </Box>
      </Box>
    </>
  );
}
