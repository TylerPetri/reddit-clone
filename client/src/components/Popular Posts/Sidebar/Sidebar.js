import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AbcIcon from '@mui/icons-material/Abc';

import Premium from './Premium';
import PopularCommunities from './Popular_Communities';
import Footer from './Footer';

export default function TopCommunities() {
  const topTemplate = [
    { icon: <AbcIcon />, community: 'r/nba' },
    { icon: <AbcIcon />, community: 'r/nba' },
    { icon: <AbcIcon />, community: 'r/nba' },
    { icon: <AbcIcon />, community: 'r/nba' },
    { icon: <AbcIcon />, community: 'r/nba' },
  ];

  const footerTemplate = [
    { tag: 'Top' },
    { tag: 'Near You' },
    { tag: 'Aww' },
    { tag: 'News' },
  ];

  const cardBox = {
    width: '325px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  };

  const topCommunityCard = {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid grey',
  };

  const titleBox = {
    position: 'relative',
    width: '100%',
    height: '70px',
    backgroundColor: 'brown',
  };

  const title = {
    position: 'absolute',
    bottom: '3px',
    left: '15px',
    margin: 0,
  };

  const ViewAllButton = styled(Button)({
    backgroundColor: '#0061A9',
    color: 'white',
    margin: '5px',
    height: '30px',
  });

  const FooterBox = styled(Box)({
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '8px',
    margin: '10px 0',
    padding: '0 7px',
  });

  const FooterButton = styled(Button)({
    height: '30px',
    width: 'fit-content',
    color: '#0061A9',
    backgroundColor: '#1D1F20',
    borderRadius: '15px',
  });

  const FillerBox = styled(Box)({
    minHeight: '20px',
    border: '1px solid grey',
  });

  return (
    <>
      <Box sx={cardBox} mt={3}>
        <Box sx={topCommunityCard}>
          <Box sx={titleBox}>
            <Typography variant='subtitle1' gutterBottom sx={title}>
              Top Communities
            </Typography>
          </Box>
          <List
            sx={{
              padding: 0,
              '& .MuiListItemIcon-root': {
                minWidth: 0,
                marginRight: 1,
              },
              '& .MuiListItemAvatar-root': {
                minWidth: 0,
                marginRight: 1,
              },
            }}
          >
            {topTemplate.map((item, idx) => (
              <>
                <ListItem key={idx} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{idx + 1}</ListItemIcon>
                    <ListItemIcon>
                      <KeyboardArrowUpIcon sx={{ color: '#54D26B' }} />
                    </ListItemIcon>
                    <ListItemAvatar>
                      <Avatar>{item.icon}</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={item.community} />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </>
            ))}
          </List>
          <ViewAllButton>View All</ViewAllButton>
          <FooterBox>
            {footerTemplate.map((item, idx) => (
              <FooterButton key={idx}>{item.tag}</FooterButton>
            ))}
          </FooterBox>
        </Box>
        <FillerBox>
          <Typography
            variant='caption'
            color='text.secondary'
            pl={1}
            gutterBottom
          >
            ADVERTISEMENT
          </Typography>
        </FillerBox>
        <Premium />
        <PopularCommunities />
        <FillerBox>
          <Typography
            variant='caption'
            color='text.secondary'
            pl={1}
            gutterBottom
          >
            ADVERTISEMENT
          </Typography>
        </FillerBox>
        <Footer />
      </Box>
    </>
  );
}
