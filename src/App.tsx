import React from 'react';
import { BrowserRouter, Routes,Route} from "react-router-dom"
import './App.css';
import Chat from './pages/chat/Chat';
import Home from './pages/home/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path='/chat' element={ <Chat/> }/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
