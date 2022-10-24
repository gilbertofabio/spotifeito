import { Route, Routes } from 'react-router-dom';
import './App.css';
import FAQ from './components/FAQ';
import Webpage from './components/Webpage';
import Cadastro from './components/Cadastro';
import PlaylistPage from './components/PlaylistPage';
import Main from './components/Main';
import Login from './components/Login';
import Alterar from './components/Alterar';
import Buscas from './components/Buscas';
import Biblioteca from './components/Biblioteca';
function App() {
  return (
    <div className='routes'>
      <Routes>
        <Route path='/' element={<Webpage />}>
          <Route path='' element={<Main />} />
          <Route path='/playlist/:id' element={<PlaylistPage/>}/>
          <Route path='/search' element={<Buscas/>}/>
          <Route path='/collection' element={<Biblioteca/>}/>
        </Route>
        <Route path='/faq' element={<FAQ />} />
        <Route path='/signup' element={<Cadastro />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/alterar' element={<Alterar />}/>
        
      </Routes>
    </div>

  );
}

export default App;
