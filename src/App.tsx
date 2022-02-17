import React from 'react';
import { BrowserRouter, Routes,Route} from "react-router-dom"
import './App.css';
import Home from './pages/home/Home';
import Navbar from './Components/NavBar/Nav';
import Tweet from './Components/Tweet/Tweet';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home/> }/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
