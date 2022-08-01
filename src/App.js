
import {useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Inicio from './componentes/Inicio';
import NavBar from './componentes/NavBar';
import Pais from './componentes/Pais';

function App() {

  
  const [dark, setDark] = useState(false);



  const changeTheme = ()=>{
    setDark(!dark);
  }
  

  return (
    <div className={dark? "App--dark" :"App"}>
    <BrowserRouter>
      <NavBar changeTheme={changeTheme} dark={dark}/>
      <Routes>
        <Route exact path='/' element={<Inicio dark={dark}/>} />
        <Route exact path='/rest-countries-api' element={<Inicio dark={dark}/>} />
        <Route exact path='/Pais/:paisId' element={<Pais dark={dark}/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
