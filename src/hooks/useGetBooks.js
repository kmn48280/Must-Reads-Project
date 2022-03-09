import React, { useState, useEffect } from 'react';
import { CancelToken } from 'apisauce';
import { getBooks } from '../api/books';

export default function useGetBooks() {
    const [books, setBooks] = useState({});
    const source = CancelToken.source();

    useEffect(
        ()=>{
            (async ()=>{
                const response = await getBooks(source.token);
                setBooks(response);
            })()
        },[]
    )
    return books;
};
