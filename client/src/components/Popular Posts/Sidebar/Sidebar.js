import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

import AbcIcon from '@mui/icons-material/Abc';

import Premium from './Premium';
import PopularCommunities from './Popular_Communities';

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
    borderRadius: '7px 7px 0 0',
  };

  const titleBox = {
    position: 'relative',
    width: '100%',
    height: '80px',
    backgroundColor: 'brown',
    borderRadius: '7px 7px 0 0',
  };

  const title = {
    position: 'absolute',
    bottom: '8px',
    left: '16px',
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
    height: '20px',
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
          <List>
            {topTemplate.map((item, idx) => (
              <>
                <ListItem key={idx} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{idx + 1}</ListItemIcon>
                    <ListItemIcon>{item.icon}</ListItemIcon>
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
        <FillerBox />
        <Premium />
        <PopularCommunities />
      </Box>
    </>
  );
}
