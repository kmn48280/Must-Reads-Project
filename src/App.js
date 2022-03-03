import React from 'react';
import './App.css';
import MyButton from './components/Button';
import AltImageList from './components/ImageList';
import { ThemeProvider } from '@mui/material/styles';
import standardTheme from './themes/standardTheme';
import MenuAppBar from './components/AppBar';

import { CancelToken } from 'apisauce';
import { postUser } from './api/createUser';
import { login } from './api/login';
import { getBooks } from './api/books';
import { putUser } from './api/apiTokenAuth';
import { deleteUser } from './api/apiTokenAuth';


/////////////WRAPPER TESTER////////////////////////////////
const handleClick= async()=>{
  const source = CancelToken.source();
  const response_object = await deleteUser({email:'ms@gmail.com', first_name:'Matthew'}, '8P2u4srUlzvD0boc2A2zkn0ulZiU0mthUGJQuvsVews', source.token);
  console.log(response_object); 
};
///////////////////////////////////////////////////////////

function App() {
  return (
    <>
      <ThemeProvider theme={standardTheme}>
        <MenuAppBar/>
        <MyButton onClick={handleClick}>Do API Call</MyButton>
        <AltImageList />
        {/* <MyButton variant='contained'>Enter</MyButton> */}
      </ThemeProvider>
    </>
  );
}

export default App;
