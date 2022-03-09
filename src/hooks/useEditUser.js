import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { CancelToken } from 'apisauce';
import { putUser } from '../api/apiTokenAuth';


export default function useEditUser(currentUser) {
    const {user, setAlert} = useContext(AppContext)
    let response;

    useEffect(
        ()=>{
            const source = CancelToken.source()
            const editUser = async() =>{
                response = await putUser(user.token, currentUser, source.token);
                if (response){
                    setAlert({msg:'You have successfully updated your profile', })
                }else if (response !== undefined && response ===false ){
                    setAlert({msg:'Please reauthorize your account, '})
                }
            }
            if (currentUuser?.token){
                editUser()
            };
            return ()=>{source.cancel()}
        },[currentUser]
    )
};
