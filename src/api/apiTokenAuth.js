import apiClientTokenAuth from './clientTokenAuth';

const endpoint = '/user' 

// DELETE USER
export const deleteUser = async (user_id, token, cancelToken) =>{
    let error;
    let message;

    const response = await apiClientTokenAuth(token, cancelToken).delete(endpoint, user_id);
    if(response.ok){
        message = "Your account has been deleted"
    }else{
        error = "An Unexpected error has occurred while deleting user."
    };
    return{
        error,
        message
    };
};

// EDIT USER
export const putUser = async ({data}, token, cancelToken) =>{
    let error;
    let message;

    const response = await apiClientTokenAuth(token, cancelToken).put(endpoint, {data});
    if(response.ok){
        message = "Your profile was updated successfully"
    }else{
        error = "An Unexpected error has occurred. Please Try Again."
    };
    return{
        error,
        message
    };
};


