import React, { createContext, useEffect, useState, useReducer } from 'react';
import { bookReducer, bookActions } from '../reducers/bookReducer';



export const AppContext = createContext();

const AppContextProvider = ({children}) =>{
    
    ////////////////////////////////// USER INFO //////////////////////////
    const getUserFromLS=()=>{
        let user = localStorage.getItem('user');
        if (user){
            return JSON.parse(user)
        };
    };

    const [user, _setUser] = useState(getUserFromLS())
    const [alert, setAlert] = useState({})
    ////////////////////////////////// LIST OF BOOKS ///////////////////////
    const getBooksFromLS = ()=>{
        let listOfBooks = localStorage.getItem('books');
        if (listOfBooks){
            return JSON.parse(listOfBooks)
        };
        return []
    };

    const [book, setBook] = useState({});
    const [listOfBooks, dispatch] = useReducer(bookReducer, getBooksFromLS())

    useEffect(
        ()=>{
            localStorage.setItem('listOfBooks', JSON.stringify(listOfBooks))
        },
        [listOfBooks]
    )
    /////////////////////////////////////////////////////////////////////////
    
    const values = {
        user,
        setUser:(user)=>{
            localStorage.setItem('user', JSON.stringify(user))
            _setUser(user)
        },
        alert,
        setAlert,
        book,
        setBook,
        listOfBooks,
        addBookToReadingList: (book)=>{
            dispatch({type: bookActions.addBookToReadingList, book})
        },
        removeBookFromReadingList: (book)=>{
            dispatch({type: bookActions.removeBookFromReadingList, book})
        },
        clearReadingList: (book)=>{
            dispatch({type: bookActions.clearReadingList, book})
        }
    };

    return (
        <AppContext.Provider value = {values}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
