import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info'; 
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import useGetBooks from '../../hooks/useGetBooks';
import { useNavigate } from 'react-router-dom';


export default function ReadingListDisplay(books) {


    const { book, addBookToReadingList } = useContext(AppContext);
    const { books } = useGetBooks()
    const navigate = useNavigate()
    

    const handleAddToReadingList = (book) =>{
      addBookToReadingList(book)
    };

  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={4}>
        <ListSubheader component="div" >Your Reading List</ListSubheader>
      </ImageListItem>
      {books?.map((book) => (
        <ImageListItem key={book.img}>
          <img
            src={book.img}
            srcSet={book.img}
            alt={book.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={book.title}
            subtitle={book.author}
            actionIcon={
              <>
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${book.title}`}
                  onClick={()=>navigate('/books/'+book.id)}
                >
                  <InfoIcon />
                </IconButton>
                <IconButton
                  sx={{ color: 'primary'}}
                  aria-label='add to reading list'
                  onClick={()=>handleAddToReadingList(book)}
                >
                  <InfoIcon />
                </IconButton>
              </>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

