import { styled } from '@mui/material/styles';

import HotFilter from './HotFilter';
import Box from '@mui/material/Box';
import Cards from './Cards';
import Sidebar from './Sidebar/Sidebar';

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

  const CardBox = styled(Box)({
    height: 'max-content',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  });

  const HotFilterBox = styled(Box)({
    display: 'flex',
    gap: 10,
    padding: '10px 13px',
    marginBottom: '25px',
    border: '1px solid grey',
  });

  return (
    <>
      <Box sx={wrapper} mt={3}>
        <h5 style={{ margin: '0 10px' }}>Popular posts</h5>
        <Box sx={contentWrapper}>
          <CardBox mt={3}>
            <HotFilterBox>
              <HotFilter />
            </HotFilterBox>
            <Cards />
          </CardBox>
          <Box sx={{ width: '325px', display: { xs: 'none', md: 'flex' } }}>
            <Sidebar />
          </Box>
        </Box>
      </Box>
    </>
  );
}
