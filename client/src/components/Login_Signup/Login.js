import * as React from 'react';
import { connect } from 'react-redux';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';

import CloseIcon from '@mui/icons-material/Close';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';

import { login } from '../../store/utils/thunkCreators';

const loginStyle = {
  display: { xs: 'none', md: 'block' },
  margin: '5px',
  border: '1px solid #2DA6FF',
  color: '#2DA6FF',
};

const loginSignupStyle = {
  display: { xs: 'block', md: 'none' },
  margin: '5px',
  border: '1px solid #2DA6FF',
  color: '#2DA6FF',
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '70%',
  minHeight: '650px',
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

function Login(props) {
  const { user, login, openLogin, setOpenLogin, setOpenSignup } = props;

  React.useEffect(() => {
    setOpenLogin(false);
  }, [user, setOpenLogin]);

  const handleOpen = () => setOpenLogin(true);
  const handleClose = () => setOpenLogin(false);
  const handleRedirect = () => {
    setOpenSignup(true);
    setOpenLogin(false);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };

  return (
    <div>
      <Button onClick={handleOpen} sx={loginStyle}>
        Login
      </Button>
      <Button onClick={handleOpen} sx={loginSignupStyle}>
        Login / Signup
      </Button>
      <Modal open={openLogin} onClose={handleClose}>
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
              <Typography variant='h6'>Login</Typography>
              <Typography variant='caption'>
                By continuing, you agree to our User Agreement and Privacy
                Policy.
              </Typography>
            </ModalHeaderBox>
            <ContinueBox>
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
              onSubmit={handleLogin}
              noValidate
              autoComplete='off'
            >
              <TextField
                fullWidth
                id='outlined-username'
                label='Username'
                name='username'
                type='text'
                variant='outlined'
              />
              <TextField
                id='outlined-password-input'
                label='Password'
                type='password'
                name='password'
                autoComplete='current-password'
                fullWidth
              />
              <LoginButton fullWidth type='submit'>
                Log In
              </LoginButton>
              <Typography variant='caption' color='text.secondary'>
                Forgot your username of password?
              </Typography>
              <Typography variant='caption' color='text.secondary' mt={2}>
                New to reddit? <Button onClick={handleRedirect}>SIGN UP</Button>
              </Typography>
            </Box>
          </ContentBox>
        </Box>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
