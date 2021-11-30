import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import SecurityIcon from '@mui/icons-material/Security';

export default function Premium() {
  const PremiumBox = styled(Box)({
    dislay: 'flex',
    flexDirection: 'column',
    padding: '10px',
    border: '1px solid grey',
  });

  const shieldStyle = {
    color: '#FF5311',
    margin: '5px',
  };

  const content = {
    display: 'flex',
    flexDirection: 'column',
  };

  const TryNowButton = styled(Button)({
    backgroundColor: '#FF5311',
    color: 'white',
    width: '100%',
    marginTop: '5px',
  });

  return (
    <>
      <PremiumBox>
        <Box sx={{ display: 'flex' }}>
          <SecurityIcon fontSize='large' sx={shieldStyle} />
          <Box sx={content}>
            <Typography variant='caption' color='text.secondary'>
              Reddit Premium
            </Typography>
            <Typography variant='caption' color='text.secondary'>
              The best Reddit experience, with monthly Coins
            </Typography>
          </Box>
        </Box>
        <TryNowButton>Try Now</TryNowButton>
      </PremiumBox>
    </>
  );
}
