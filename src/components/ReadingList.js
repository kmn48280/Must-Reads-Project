import * as React from 'react';
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
  return (
    <Stack col={3}>
    <Box
        sx={{
        display: 'flex',
        '& > :not(style)': {
            m: 1,
            width: 200,
            height: 200,
            backgroundImage: "https://s2982.pcdn.co/wp-content/uploads/2018/11/cat-flexing.jpg"
        },
        }}
    >
        <Paper variant="outlined" />
    </Box>
    
    <Rating
      name="highlight-selected-only"
      defaultValue={2}
      IconContainerComponent={IconContainer}
      highlightSelectedOnly
    />
    <Box
        sx={{
        display: 'flex',
        '& > :not(style)': {
            m: 1,
            width: 200,
            height: 200,
            backgroundImage: "https://s2982.pcdn.co/wp-content/uploads/2018/11/cat-flexing.jpg"
        },
        }}
    >
        <Paper variant="outlined" />
    </Box>
    
    <Rating
      name="highlight-selected-only"
      defaultValue={2}
      IconContainerComponent={IconContainer}
      highlightSelectedOnly
    />
    <Box
        sx={{
        display: 'flex',
        '& > :not(style)': {
            m: 1,
            width: 200,
            height: 200,
            backgroundImage: "https://s2982.pcdn.co/wp-content/uploads/2018/11/cat-flexing.jpg"
        },
        }}
    >
        <Paper variant="outlined" />
    </Box>
    
    <Rating
      name="highlight-selected-only"
      defaultValue={2}
      IconContainerComponent={IconContainer}
      highlightSelectedOnly
    />
    </Stack>
  );
};