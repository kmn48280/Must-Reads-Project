import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ReadingList from '../components/ReadingList';
import Typography from '@mui/material/Typography';


export default function ReadingListPage() {

    const {listOfBooks} = useContext(AppContext);
    
    if (listOfBooks.length <=0){
      return (
        <Typography variant='h3'>Your Reading List is Empty! </Typography>
      )
    }
    return (
      <>
        <Typography variant='h3'>Your Reading List:</Typography>
        <ReadingList/>
      </>
    
  )
};
