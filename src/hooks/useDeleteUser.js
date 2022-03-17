import React, { useContext, useEffect } from 'react';
import { CancelToken } from 'apisauce';
import { deleteUser } from '../api/apiTokenAuth';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

export default function useDeleteUser(currentUser) {
    const { user, setAlert } = useContext(AppContext)
    const navigate = useNavigate()


    useEffect(
        ()=>{
            let response;
            const source = CancelToken.source();
            const removeUser = async () =>{
                response = await deleteUser(user.id, user.token, source.token);
                if (response){
                    setAlert({msg:"The user was deleted", cat:'warning'})
                }else if (response !== undefined && response === false){
                    setAlert({msg:"Please try again",cat:'danger'})
                }
            }
            if (currentUser?.id){
                removeUser();
                navigate('/')
            };
            return ()=>{source.cancel()};
        },[currentUser, setAlert, navigate]
    )
};
