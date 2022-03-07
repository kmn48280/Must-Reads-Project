import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardReturnRoundedIcon from '@mui/icons-material/KeyboardReturnRounded';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function SingleBook() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="book desc">
            D
          </Avatar>
        }
        title="ALWAYS ASK A MAN: THE KEY TO FEMININITY" 
        // {book.title}
        subheader="Author: Arlene Dahl"
        // {book.author}
      />
      <CardMedia 
        component="img"
        height= "auto"
        width ="auto"
        img src='https://s2982.pcdn.co/wp-content/uploads/2018/11/always-ask-a-man-book-cover.jpg'
        alt="book on femininity"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary"> 
          Summary: For women traveling back to the US 1950...
          {/* {book.summary} */}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="return to main page">
          <KeyboardReturnRoundedIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>

          <Typography paragraph>Details:</Typography>
          <Typography paragraph>
            Subject: Self Help
            {/* {book.subject} */}
          </Typography>
          <Typography paragraph>
            Title: ALWAYS ASK A MAN: THE KEY TO FEMININITY
            {/* {book.title} */}
          </Typography>
          <Typography paragraph>
            Summary: For women traveling back to the US 1950
            {/* {book.summary} */}
          </Typography>
    
        </CardContent>
      </Collapse>
    </Card>
  );
};

