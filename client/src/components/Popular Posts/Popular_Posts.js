import Box from '@mui/material/Box';

import Cards from './Cards';
import Sidebar from './Sidebar';

export default function Popular() {
  const wrapper = {
    bgcolor: '#000000',
    display: 'flex',
    flexDirection: 'column',
  };

  const contentWrapper = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '30px',
  };

  return (
    <>
      <Box sx={wrapper} mt={3}>
        <h5 style={{ margin: '0 10px' }}>Popular posts</h5>
        <Box sx={contentWrapper}>
          <Cards />
          <div style={{ width: '325px' }}>
            <Sidebar />
          </div>
        </Box>
      </Box>
    </>
  );
}
