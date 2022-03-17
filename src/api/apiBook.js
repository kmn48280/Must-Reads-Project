import apiClientNoAuth from './clientNoAuth';

const endpoint = '/book';

///////////////////////////////// GET ALL BOOKS //////////////////////////////////////////////////
export const getBooks = async (cancelToken) =>{
    let books;
    let error;

    const response = await apiClientNoAuth(cancelToken).get(endpoint);
    if( response.ok ){
        books = response.data.books
    } else{
        error = 'An Unexpected error has occurred. Please try again.'
    };

    return{
        error,
        books
    };
};

/////////////////////////////// GET ONE BOOK INFO////////////////////////////////////////////////

export const getBook = async (id, cancelToken) =>{
    let book;
    let error;

    const response = await apiClientNoAuth(cancelToken).get(endpoint+'/'+id);
    if( response.ok ){
        book = response.data
    }else{
        error = 'An Unexpected error has occurred.  Please try again.'
    }
    return{
        book,
        error
    };
};