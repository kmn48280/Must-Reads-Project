import { useState, useEffect }from 'react';
import { CancelToken } from 'apisauce';
import getBook from '../api/apiBook';


export default function useSingleBook(bookId) {

    const {book, setBook} = useState([]);
    
    useEffect(
        ()=>{
            let source;
            source = CancelToken.source()
            (async ()=>{
                const response = await getBook(bookId, source.token);
                setBook(response);
            })()
            return ()=>{source.cancel()}
        },[bookId]
    )
    return book
}
