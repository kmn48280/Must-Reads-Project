import React, { useContext, useEffect } from 'react';
import { CancelToken } from 'apisauce';
import { deleteUser } from '../api/apiTokenAuth';
import { AppContext } from '../context/AppContext';

export default function useDeleteUser(currentUser) {
    let response;
    const { user } = useContext(AppContext)

    useEffect(
        ()=>{
            const source = CancelToken.source();
            const removeUser = async () =>{
                response = await deleteUser(user.id, user.token, source.token);
                if (response){
                    console.log("The user was deleted")
                }else if (response !== undefined && response === false){
                    console.log("Please try again")
                }
            }
            if (currentUser?.id){
                removeUser();
            };
            return ()=>{source.cancel()};
        },[currentUser]
    )
};
