import * as React from 'react';
import { connect } from 'react-redux';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';

import CloseIcon from '@mui/icons-material/Close';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import ReplayIcon from '@mui/icons-material/Replay';
import CircularProgress from '@mui/material/CircularProgress';

import { register, emailCheck } from '../../store/utils/thunkCreators';

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

const SignUpButton = styled(Button)({
  color: 'white',
  background: '#007BD7',
});

const suggestionStyle = {
  color: '#33A8FF',
  background: 'none',
  padding: '1px 0',
  display: 'flex',
  justifyContent: 'flex-start',
  '&:hover': {
    opacity: '0.7',
    background: 'none',
  },
  width: '270px',
};

function Signup(props) {
  const [enteredEmail, setEnteredEmail] = React.useState(false);
  const [email, setEmail] = React.useState();
  const [usernameState, setUsernameState] = React.useState('');
  const [fetchingEmail, setFetchingEmail] = React.useState(false);
  const [fetchingSignUp, setFetchingSignUp] = React.useState(false);

  const suggestions = [
    'NefariousnessOk7743',
    'Prior-Roll3858',
    'Independent_Ear_1384',
    'No-Confection2571',
    'Thick_Sea8733',
  ];

  const {
    user,
    openSignup,
    setOpenLogin,
    setOpenSignup,
    register,
    emailCheck,
  } = props;

  React.useEffect(() => {
    setOpenSignup(false);
  }, [user.user, setOpenSignup]);

  React.useEffect(() => {
    if (user.email) {
      setEmail(user.email);
      setEnteredEmail(true);
    }
  }, [user.email]);

  const handleOpen = () => setOpenSignup(true);
  const handleClose = () => setOpenSignup(false);
  const handleRedirect = () => {
    setOpenSignup(false);
    setOpenLogin(true);
  };

  const handleEmail = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    setFetchingEmail(true);
    await emailCheck({ email });
    setFetchingEmail(false);
  };

  const handleSuggestion = (suggestion) => setUsernameState(suggestion);
  const handleChange = (event) => setUsernameState(event.target.value);
  const handleBack = () => setEnteredEmail(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = usernameState;
    const password = event.target.password.value;

    setFetchingSignUp(true);
    await register({ username, email, password });
    setFetchingSignUp(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} sx={buttonStyle}>
        Sign up
      </Button>
      <Modal open={openSignup} onClose={handleClose}>
        {!enteredEmail ? (
          <div>
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
                    By continuing, you are setting up a Reddit account and agree
                    to our User Agreement and Privacy Policy.
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
                    <span style={{ margin: '0 auto' }}>
                      Continue with Google
                    </span>
                  </Button>
                  <Button sx={continueStyle}>
                    <AppleIcon />
                    <span style={{ margin: '0 auto' }}>
                      Continue with Apple
                    </span>
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
                  onSubmit={handleEmail}
                  noValidate
                  autoComplete='off'
                >
                  <TextField
                    fullWidth
                    id='outlined-email'
                    label='Email'
                    type='email'
                    name='email'
                    variant='outlined'
                  />
                  <Box sx={{ position: 'relative' }}>
                    <SignUpButton
                      fullWidth
                      sx={{ mt: 1, opacity: fetchingEmail ? '0.1' : '1' }}
                      type='submit'
                      disabled={fetchingEmail}
                    >
                      CONTINUE
                    </SignUpButton>
                    {fetchingEmail && (
                      <CircularProgress
                        size={24}
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          marginTop: '-8px',
                          marginLeft: '-12px',
                        }}
                      />
                    )}
                  </Box>
                  <Typography variant='caption' color='text.secondary' mt={1}>
                    Already a redditor?
                    <Button onClick={handleRedirect}>LOG IN</Button>
                  </Typography>
                </Box>
              </ContentBox>
            </Box>
          </div>
        ) : (
          <div>
            <Box sx={modalStyle}>
              <ContentBox>
                <Box
                  sx={{
                    display: 'flex',
                    p: 2,
                    color: '#808080',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '5px 0 0 10px',
                    }}
                  >
                    <Typography variant='h6' color='text.secondary'>
                      Choose your username
                    </Typography>
                    <Typography variant='caption' color='text.secondary'>
                      Your username is how other community members will see you.
                      This name will be used to credit you for things you share
                      on Reddit. What should we call you?
                    </Typography>
                  </Box>
                  <div className='close-button' onClick={handleClose}>
                    <CloseIcon />
                  </div>
                </Box>
                <Divider />

                <Grid
                  container
                  component='form'
                  sx={{
                    flexGrow: 1,
                    '& .MuiTextField-root': { p: 0 },
                  }}
                  direction='column'
                  justifyContent='space-between'
                  spacing={2}
                  onSubmit={handleSubmit}
                  noValidate
                  autoComplete='off'
                >
                  <Grid
                    item
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 3,
                      flexGrow: 1,
                      m: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 3,
                        flexGrow: 1,
                      }}
                    >
                      <TextField
                        id='outlined-username'
                        label='CHOOSE A USERNAME'
                        name='username'
                        type='text'
                        variant='outlined'
                        value={usernameState}
                        onChange={handleChange}
                        sx={{ maxWidth: '350px' }}
                      />
                      <TextField
                        id='outlined-password-input'
                        label='PASSWORD'
                        type='password'
                        name='password'
                        autoComplete='current-password'
                        sx={{ maxWidth: '350px' }}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        '& .MuiTypography-root': {
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                        },
                        width: 'max-content',
                      }}
                    >
                      <Typography variant='subtitle2'>
                        Here are some username suggestions{' '}
                        <ReplayIcon fontSize='small' color='primary' />
                      </Typography>
                      {suggestions.map((suggestion) => (
                        <Button
                          sx={suggestionStyle}
                          key={suggestion}
                          onClick={() => handleSuggestion(suggestion)}
                        >
                          {suggestion}
                        </Button>
                      ))}
                    </Box>
                  </Grid>
                  <Grid item sx={{ p: 0 }}>
                    <Divider />
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        p: 1,
                      }}
                    >
                      <Button
                        onClick={handleBack}
                        sx={{
                          color: 'text.secondary',
                          '&:hover': { background: 'none', color: '#33A8FF' },
                        }}
                      >
                        Back
                      </Button>
                      <Box sx={{ position: 'relative' }}>
                        <SignUpButton
                          sx={{ mt: 1, opacity: fetchingEmail ? '0.1' : '1' }}
                          type='submit'
                          disabled={fetchingSignUp}
                        >
                          Sign Up
                        </SignUpButton>
                        {fetchingSignUp && (
                          <CircularProgress
                            size={24}
                            sx={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              marginTop: '-8px',
                              marginLeft: '-12px',
                            }}
                          />
                        )}
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </ContentBox>
            </Box>
          </div>
        )}
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
    register: (credentials) => {
      dispatch(register(credentials));
    },
    emailCheck: (credentials) => {
      dispatch(emailCheck(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
