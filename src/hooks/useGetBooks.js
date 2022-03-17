import { useState, useEffect } from 'react';
import { CancelToken } from 'apisauce';
import { getBooks } from '../api/books';

export default function useGetBooks() {
    const [books, setBooks] = useState({});
    

    useEffect(
        ()=>{
            const source = CancelToken.source();
            (async ()=>{
                const response = await getBooks(source.token);
                setBooks(response);
            })()
            return ()=>{source.cancel()};
        },[]
    )
    return books;
};
