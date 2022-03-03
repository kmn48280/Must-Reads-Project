import apiClientNoAuth from './clientNoAuth';

const endpoint = '/user';

// CREATE USER
export const postUser = async (data, cancelToken) =>{
    let error;
    let message;
    console.log('data,', data)
    
    const response = await apiClientNoAuth(cancelToken).post(endpoint, data);
    if(response.ok){
        message = "success"

    }else if(response === 422){
        error = "Email is in use. Please Login or provide another email."
    }else{
        error = "Unexpected Error has Occurred.  Please Try Again."
    }
    return{
        error,
        message
    };
};