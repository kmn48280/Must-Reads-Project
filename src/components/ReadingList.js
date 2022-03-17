import { useContext }from 'react';
import { AppContext } from '../context/AppContext';
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

/////////////////////////////////////////////////////
export default function ReadingList() {
  const {listOfBooks, removeBookFromReadingList } = useContext(AppContext);

  const handleRemoveFromReadingList=(book)=>{
    removeBookFromReadingList(book)
  };

  return (
    
    <Stack col={3}>
      {console.log(listOfBooks)}
      {listOfBooks?.map((book)=>(
        <Box 
            key={book.id} 
            sx={{
            display: 'flex',
            '& > :not(style)': {
                m: 1,
                width: 200,
                height: 200,
                backgroundImage: book.img
            },
            }}
        >
            <Paper variant="outlined" />
       
        
            <Rating
              name="highlight-selected-only"
              defaultValue={2}
              IconContainerComponent={IconContainer}
              highlightSelectedOnly
            />
            <IconButton
              color="primary"
              aria-label='remove from reading list'
              onClick={()=>handleRemoveFromReadingList(book)}
              >
                <DeleteOutlineIcon/>
            </IconButton>
        </Box>
      ))}
    </Stack>
  );
};