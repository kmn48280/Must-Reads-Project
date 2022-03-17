import { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { CancelToken } from 'apisauce';
import { putUser } from '../api/apiTokenAuth';
import { useNavigate } from 'react-router-dom';


export default function useEditUser(currentUser) {
    const {user, setAlert} = useContext(AppContext)
    const navigate = useNavigate()
   

    useEffect(
        ()=>{
            let response;
            const source = CancelToken.source()
            const editUser = async() =>{
                response = await putUser(user.token, currentUser, source.token);
                if (response){
                    setAlert({msg:'You have successfully updated your profile', cat:'success' })
                }else if (response !== undefined && response ===false ){
                    setAlert({msg:'Please reauthorize your account.', cat:'danger'})
                    navigate('/login')
                }
            }
            if (currentUser?.token){
                editUser()
                navigate('/')
            };
            return ()=>{source.cancel()}
        },[currentUser, setAlert, navigate]
    )
};
