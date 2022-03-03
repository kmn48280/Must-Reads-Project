import apiClientNoAuth from './clientNoAuth';

const endpoint = '/book';

export const getBooks = async (cancelToken) =>{
    let books;

    const response = await apiClientNoAuth(cancelToken).get(endpoint,{books:books});
    return response.data
};