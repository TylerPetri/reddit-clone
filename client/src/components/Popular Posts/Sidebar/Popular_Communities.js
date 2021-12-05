import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

export default function PopularCommunities() {
  const popularList = [
    'Gaming',
    'Sports',
    'TV',
    'Travel',
    'Health & Fitness',
    'Fashion',
  ];
  const links = [
    'AskReddit',
    'NoStupidQuestions',
    'DestinyTheGame',
    'explainlikeimfive',
    'AskMen',
    'leagueoflegends',
    'Minecraft',
    'anime',
    'IAmA',
    'AskWomen',
    'OutOfTheLoop',
    'Fitness',
    'destiny2',
    'classicwow',
    'PS4',
    'discordapp',
    'DnD',
    'FIFA',
    'Instagram',
    'apple',
    'Twitch',
  ];
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const PopularCommunitiesBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid grey',
  });

  const AllCommunitiesBox = styled(Box)({
    padding: '0 10px 10px',
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    gap: '10px',
  });

  const SeeMore = styled(Button)({
    width: 'max-content',
    margin: '10px 0 0 10px',
  });

  return (
    <>
      <PopularCommunitiesBox>
        <Typography variant='caption' p={1} gutterBottom>
          POPULAR COMMUNITIES
        </Typography>
        <AllCommunitiesBox sx={{ height: open ? 'max-content' : '65px' }}>
          {links.map((link, idx) => (
            <Link to={link} key={idx} className='link'>
              {link}
            </Link>
          ))}
        </AllCommunitiesBox>
        <SeeMore onClick={handleClick}>
          {open ? 'See less' : 'See more'}
        </SeeMore>
        <List>
          {popularList.map((item, idx) => (
            <div key={idx}>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            </div>
          ))}
        </List>
      </PopularCommunitiesBox>
    </>
  );
}
