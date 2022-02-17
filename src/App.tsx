import React from 'react';
import { BrowserRouter, Routes,Route} from "react-router-dom"
import './App.css';
import BookMarksPage from './Components/BookMarksPage';
import ExplorePage from './Components/ExplorePage';
import TrendingMobilePage from './Components/TrendingMobilePage';
import TweetingContainer from './Components/TweetingContainer';
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
    </Routes>
  </BrowserRouter>
  );
}

export default App;
