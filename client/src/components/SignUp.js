import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';

import CloseIcon from '@mui/icons-material/Close';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';

const buttonStyle = {
  backgroundColor: '#0061A9',
  color: 'white',
  margin: '5px',
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '70%',
  width: '85%',
  maxWidth: '800px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  display: 'flex',
};

const Img = styled(Box)({
  height: '100%',
  width: '100px',
  backgroundColor: 'skyblue',
});

const ContentBox = styled(Box)({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const ModalHeaderBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: 20,
  width: '350px',
});

const ContinueBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 10,
  marginTop: '50px',
  paddingLeft: '20px',
});

const continueStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '300px',
  color: '#808080',
  border: '1px solid grey',
};

const OrDividerBox = styled(Box)({
  width: '320px',
  color: '#808080',
  marginTop: '40px',
  paddingLeft: '20px',
});

const LoginButton = styled(Button)({
  color: 'white',
  background: '#007BD7',
});

export default function Signup(props) {
  const handleOpen = () => setOpenSignup(true);
  const handleClose = () => setOpenSignup(false);
  const handleRedirect = () => {
    setOpenSignup(false);
    setOpenLogin(true);
  };

  const { openSignup, setOpenLogin, setOpenSignup } = props;

  return (
    <div>
      <Button onClick={handleOpen} sx={buttonStyle}>
        Sign up
      </Button>
      <Modal open={openSignup} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Img />
          <ContentBox>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: 2,
                color: '#808080',
              }}
            >
              <div className='close-button' onClick={handleClose}>
                <CloseIcon />
              </div>
            </Box>
            <ModalHeaderBox>
              <Typography variant='h6'>Sign Up</Typography>
              <Typography variant='caption'>
                By continuing, you are setting up a Reddit account and agree to
                our User Agreement and Privacy Policy.
              </Typography>
            </ModalHeaderBox>
            <ContinueBox>
              <div>
                <Checkbox sx={{ p: 0, mr: 1 }} />
                <Typography variant='caption' color='text.secondary'>
                  I agree to get emails about cool stuff on Reddit
                </Typography>
              </div>
              <Button sx={continueStyle}>
                <GoogleIcon />
                <span style={{ margin: '0 auto' }}>Continue with Google</span>
              </Button>
              <Button sx={continueStyle}>
                <AppleIcon />{' '}
                <span style={{ margin: '0 auto' }}>Continue with Apple</span>
              </Button>
            </ContinueBox>
            <OrDividerBox>
              <Divider>OR</Divider>
            </OrDividerBox>
            <Box
              component='form'
              sx={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '30px',
                paddingLeft: '20px',
                width: '320px',
                gap: 1,
                '& .MuiTextField-root': { p: 0 },
              }}
              noValidate
              autoComplete='off'
            >
              <TextField
                fullWidth
                id='outlined-email'
                label='Email'
                variant='outlined'
              />
              <LoginButton fullWidth sx={{ mt: 1 }}>
                CONTINUE
              </LoginButton>

              <Typography variant='caption' color='text.secondary' mt={1}>
                Already a redditor?{' '}
                <Button onClick={handleRedirect}>LOG IN</Button>
              </Typography>
            </Box>
          </ContentBox>
        </Box>
      </Modal>
    </div>
  );
}
