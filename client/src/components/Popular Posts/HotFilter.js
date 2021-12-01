import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Brightness5OutlinedIcon from '@mui/icons-material/Brightness5Outlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const options = [
  'Everywhere',
  'Argentina',
  'Australia',
  'Bulgaria',
  'Canada',
  'Chile',
  'Colombia',
  'Croatia',
  'Czech Republic',
  'Finland',
  'France',
  'Germany',
  'Greece',
  'Hungary',
  'Iceland',
  'India',
  'Ireland',
  'Italy',
  'Japan',
  'Malaysia',
  'Mexico',
  'New Zealand',
  'Philippines',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Romania',
  'Serbia',
  'Singapore',
  'Spain',
  'Sweden',
  'Taiwan',
  'Thailand',
  'Turkey',
  'United Kingdom',
  'United States',
];

export default function HotFiler() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const HotButton = styled(Button)({
    color: '#51B5FF',
    background: '#1D1F20',
    display: 'flex',
    gap: 7,
  });

  const countryListStyle = {
    bgcolor: '#1D1F20',
    color: '#51B5FF',
    padding: 0,
  };

  const menuStyle = {
    height: '300px',
  };

  const NewButton = styled(Button)({
    color: 'grey',
    background: 'none',
    display: 'flex',
    gap: 7,
  });

  const TopButton = styled(Button)({
    color: 'grey',
    background: 'none',
    display: 'flex',
    gap: 7,
  });

  const RisingButton = styled(Button)({
    color: 'grey',
    background: 'none',
    display: 'flex',
    gap: 7,
    border: '1px solid grey',
  });

  return (
    <>
      <HotButton>
        <LocalFireDepartmentIcon />
        Hot
      </HotButton>
      <div>
        <List
          component='nav'
          aria-label='Country settings'
          sx={countryListStyle}
        >
          <ListItem
            button
            id='country-button'
            aria-haspopup='listbox'
            aria-controls='country-menu'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClickListItem}
          >
            <ListItemText>{options[selectedIndex]}</ListItemText>
            <KeyboardArrowDownIcon />
          </ListItem>
        </List>
        <Menu
          id='country-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'country-button',
            role: 'listbox',
          }}
          sx={menuStyle}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              disabled={index === 0}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
      <NewButton>
        <Brightness5OutlinedIcon />
        New
      </NewButton>
      <TopButton>
        <MilitaryTechOutlinedIcon />
        Top
      </TopButton>
      <div>
        <Button onClick={handleClick} sx={{ height: '100%', color: '#808080' }}>
          <MoreHorizIcon />
        </Button>
        <Menu
          anchorEl={anchorEl2}
          open={open2}
          onClose={handleClose2}
          sx={{
            '& .MuiList-root': {
              padding: 0,
              background: 'black',
            },
          }}
        >
          <RisingButton onClick={handleClose2}>
            <TrendingUpOutlinedIcon />
            Rising
          </RisingButton>
        </Menu>
      </div>
    </>
  );
}
