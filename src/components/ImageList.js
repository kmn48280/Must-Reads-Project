import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import React from 'react';

export default function AltImageList({style, variant, children, ...props}) {
  return (
    <ImageList sx={{ width: 600, height: 550}} variant="woven" cols={3} gap={8} {...props}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://i5.walmartimages.com/asr/146ab63a-9080-408f-862f-c0cd8916dcd9.2eae655ebc5303f75be722702e3e0fbb.jpeg',
    title: 'Bookshelf',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    img: 'https://i.pinimg.com/originals/66/e6/8f/66e68fa9ec1e80b2fd5b38d20e04ee90.jpg',
    title: 'Chair',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  

];