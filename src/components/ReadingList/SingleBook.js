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
import { useParams } from 'react-router-dom';
import useSingleBook from '../../hooks/useSingleBook';

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
  const {bookId} = useParams()
  const { book } = useSingleBook(bookId);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box key={book?.id} sx={{display:'flex', alignItems:'center', my:2 }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="book initials">
              {book?.title.slice(0,1).toUpperCase()}
            </Avatar>
          }
          title={book?.title}
          subheader={book?.author}
        />
        <CardMedia 
          component="img"
          height= "auto"
          width ="auto"
          img src={book?.img}
          alt={book?.title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary"> 
            {book?.summary.slice(0,20)}
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
              {book?.subject}
            </Typography>
            <Typography paragraph>
              {book?.title}
            </Typography>
            <Typography paragraph>
              {book?.summary}
            </Typography>
      
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
};

