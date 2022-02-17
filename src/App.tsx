import React from 'react';
import { BrowserRouter, Routes,Route} from "react-router-dom"
import './App.css';
import BookMarksPage from './Components/BookMarksPage';
import ExplorePage from './Components/ExplorePage';
import TrendingDesktopPage from './Components/TrendingDesktopPage';
import TrendingMobilePage from './Components/TrendingMobilePage';
import TweetingContainer from './Components/TweetingContainer';
import Chat from './pages/chat/Chat';
import Home from './pages/home/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path ="/tweet" element = {<TweetingContainer/>}/>
      <Route path ="/trending" element = {<TrendingMobilePage/>}/>
      <Route path ="/explore" element = {<ExplorePage/>}/>
      <Route path ="/bookmark" element = {<BookMarksPage/>}/>
      <Route path='/chat' element={ <Chat/> }/>
      <Route path='/tweet/desktoptrending' element={ <TrendingDesktopPage/> }/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
