import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwotone';
import RemoveCircleTwoToneIcon from '@mui/icons-material/RemoveCircleTwoToneIcon';
import ButtonGroup from '@mui/matterial/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export default function AddRemoveBook({book}){
    const { book, addBookToReadingList, removeBookFromReadingList, clearReadingList } = useContext(AppContext);

    return(
        <ButtonGroup sx={{margin:'auto'}}>
            <IconButton key='add' onClick={()=>{addBookToReadingList(book)}}>
                <AddCircleTwoToneIcon fontSize='small'/>
            </IconButton>
            <IconButton key='delete' onClick={()=>{removeBookFromReadingList(book)}}>
                <RemoveCircleTwoToneIcon fontSize='small'/>
            </IconButton>
            <IconButton key='clear' onClick={()=>{clearReadingList(book)}}>
                <DeleteForeverTwoToneIcon fontSize='small'/>
            </IconButton>
        </ButtonGroup>
    )
};