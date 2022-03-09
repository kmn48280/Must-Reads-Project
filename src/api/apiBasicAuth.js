import apiClientBasicAuth from './clientBasicAuth';

const endpoint = '/login';


// LOGIN FOR USER
export const getUser = async ({email, password}, cancelToken) =>{
    let error;
    let token;
    let user;
 

    const response = await apiClientBasicAuth({email, password}, cancelToken).get(endpoint);
    if(response.ok){
        user = response.data
        token = response.data.token
    }else if(response === 401){
        error = "Invalid Email/Password Combo"
    }else{
        error = "Unexpected Error has Occurred.  Please Try Again."
    }
    return{
        error,
        user,
        token
    }
};