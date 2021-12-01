import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const links1 = [
  'Help',
  'Reddit Coins',
  'Reddit Premium',
  'Reddit Gifts',
  'Communities',
  'Rereddit',
  'Topics',
];

const links2 = [
  'About',
  'Careers',
  'Press',
  'Advertise',
  'Blog',
  'Terms',
  'Content Policy',
  'Privacy Policy',
  'Mod Policy',
];

const FooterBox = styled(Box)({
  background: '#1E1E1E',
});

const listStyle = {
  display: 'flex',
  flexDirection: 'column',
  background: 'none',
};

const copyrightStyle = {
  background: 'none',
  width: 'max-content',
};

export default function Footer() {
  return (
    <FooterBox>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item sx={listStyle}>
            {links1.map((link) => (
              <Link key={link} to={link} className='footer-links'>
                {link}
              </Link>
            ))}
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item sx={listStyle}>
            {links2.map((link) => (
              <Link key={link} to={link} className='footer-links'>
                {link}
              </Link>
            ))}
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item sx={copyrightStyle}>
            Reddit Inc © 2021 . All rights reserved
          </Item>
        </Grid>
      </Grid>
    </FooterBox>
  );
}
