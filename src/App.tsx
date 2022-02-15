import React from 'react';
import { BrowserRouter, Routes,Route} from "react-router-dom"
import './App.css';
import Home from './pages/home/Home';
import Following from './pages/following/following';
import ChangePassword from './pages/changePassword/changePassword';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home/> }/>
    </Routes>
    <Routes>
      <Route path='/following' element={ <Following/> }/>
    </Routes>
    <Routes>
      <Route path='/changePassword' element={ <ChangePassword/> }/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
