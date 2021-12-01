import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

import Login from './Login';
import SignUp from './SignUp';
import { Divider } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openSignup, setOpenSignup] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      keepMounted
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Typography variant='caption' pl={2} color='text.secondary'>
        View options
      </Typography>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <DarkModeOutlinedIcon fontSize='small' />
        </ListItemIcon>
        <ListItemText>Night Mode</ListItemText>
      </MenuItem>
      <Typography variant='caption' pl={2} color='text.secondary'>
        More stuff
      </Typography>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <MonetizationOnOutlinedIcon fontSize='small' />
        </ListItemIcon>
        <ListItemText>Coins</ListItemText>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <SecurityOutlinedIcon fontSize='small' />
        </ListItemIcon>
        <ListItemText>Premium</ListItemText>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <BoltOutlinedIcon fontSize='small' />
        </ListItemIcon>
        <ListItemText>Powerups</ListItemText>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <AdjustOutlinedIcon fontSize='small' />
        </ListItemIcon>
        <ListItemText>Talk</ListItemText>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <AutoFixHighOutlinedIcon fontSize='small' />
        </ListItemIcon>
        <ListItemText>Predictions</ListItemText>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <HelpOutlineOutlinedIcon fontSize='small' />
        </ListItemIcon>
        <ListItemText>Help Center</ListItemText>{' '}
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <ExitToAppOutlinedIcon fontSize='small' />
        </ListItemIcon>
        <ListItemText>Log In / Sign Up</ListItemText>{' '}
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      id={mobileMenuId}
      keepMounted
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Typography variant='caption' pl={2} color='text.secondary'>
        View options
      </Typography>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <DarkModeOutlinedIcon fontSize='small' />
        </ListItemIcon>
        <ListItemText>Night Mode</ListItemText>
      </MenuItem>
      <Typography variant='caption' pl={2} color='text.secondary'>
        More stuff
      </Typography>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <MonetizationOnOutlinedIcon fontSize='small' />
        </ListItemIcon>
        <ListItemText>Coins</ListItemText>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <SecurityOutlinedIcon fontSize='small' />
        </ListItemIcon>
        <ListItemText>Premium</ListItemText>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <BoltOutlinedIcon fontSize='small' />
        </ListItemIcon>
        <ListItemText>Powerups</ListItemText>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <AdjustOutlinedIcon fontSize='small' />
        </ListItemIcon>
        <ListItemText>Talk</ListItemText>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <AutoFixHighOutlinedIcon fontSize='small' />
        </ListItemIcon>
        <ListItemText>Predictions</ListItemText>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <HelpOutlineOutlinedIcon fontSize='small' />
        </ListItemIcon>
        <ListItemText>Help Center</ListItemText>{' '}
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <ExitToAppOutlinedIcon fontSize='small' />
        </ListItemIcon>
        <ListItemText>Log In / Sign Up</ListItemText>{' '}
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            REDDIT
          </Typography>
          <Search sx={{ flexGrow: 1, maxWidth: '800px' }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search…'
              inputProps={{ 'aria-label': 'search' }}
              fullWidth
            />
          </Search>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Login
              openLogin={openLogin}
              setOpenLogin={setOpenLogin}
              setOpenSignup={setOpenSignup}
            />
            <SignUp
              setOpenLogin={setOpenLogin}
              openSignup={openSignup}
              setOpenSignup={setOpenSignup}
            />
            <IconButton
              size='large'
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
