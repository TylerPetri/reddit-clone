import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';
import ArrowCircleDownTwoToneIcon from '@mui/icons-material/ArrowCircleDownTwoTone';
import AddIcon from '@mui/icons-material/Add';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

export default function Popular() {
  const voteCount = 140;
  const commentCount = 750;

  const card = {
    height: 'max-content',
    display: 'flex',
    width: '100%',
    flexGrow: 1,
    backgroundColor: '#181A1B',
    border: '1px solid grey',
    marginBottom: '15px',
  };

  const votes = {
    width: '50px',
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const content = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '5px',
  };

  const FooterButton = styled(Button)({
    color: '#9E9589',
    gap: '5px',
  });

  const JoinButton = styled(Button)({
    backgroundColor: '#0061A9',
    color: 'white',
    margin: '5px',
    paddingRight: '15px',
    height: '30px',
  });

  return (
    <>
      <Box sx={card}>
        <Box sx={votes}>
          <Checkbox
            icon={<ArrowCircleUpIcon />}
            checkedIcon={<ArrowCircleUpTwoToneIcon />}
          />
          <div>{voteCount}</div>
          <Checkbox
            icon={<ArrowCircleDownIcon />}
            checkedIcon={<ArrowCircleDownTwoToneIcon />}
          />
        </Box>
        <Box sx={content}>
          <Typography
            variant='caption'
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            r/AskReddit •Posted byu/Gaelic_Gladiator_64 22 hours ago Helpful10
            Wholesome10 Silver12
            <JoinButton>
              <AddIcon />
              Join
            </JoinButton>
          </Typography>
          <Typography variant='h6' color='text.secondary' gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant='overline' gutterBottom>
            <FooterButton>
              <ChatBubbleOutlineOutlinedIcon />
              {commentCount}
            </FooterButton>
            <FooterButton>
              <ShareOutlinedIcon />
              Share
            </FooterButton>
            <FooterButton>
              <BookmarkBorderOutlinedIcon />
              Save
            </FooterButton>
            <FooterButton>
              <MoreHorizOutlinedIcon />
            </FooterButton>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
