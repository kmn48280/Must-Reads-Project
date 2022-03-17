import { useContext }from 'react';
import { AppContext } from './context/AppContext';
import MenuAppBar from './components/AppBar';
import BookBrowser from './views/BookBrowser';
import LoginPage from './views/LoginPage';
import Logout from './views/Logout';


const HomePage = ()=>{return(<h1>Welcome to Kris' MustReads!</h1>)}

function App() {
  const{user} = useContext(AppContext);

  return (
    <>
      <MenuAppBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/books' element ={<BookBrowser/>}/>
        <Route path='/books/:bookId' element={<SingleBook/>}/>
        <Route path='/readinglistpage/:bookId' element={<ReadingListPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>
    </>
  );
}

export default App;
