import React, { useState, useMemo,useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BookMarksPage from "././Components/BookMarksPage";
import ExplorePage from "./Components/ExplorePage";
import TrendingDesktopPage from "./Components/TrendingDesktopPage";
import TrendingMobilePage from "./Components/TrendingMobilePage";
import TweetingContainer from "./Components/TweetingContainer";
import Chat from "./pages/chat/Chat";
import Home from "./pages/home/Home";

import Login from "./pages/authentication/Login/Login";
import Signup from "./pages/authentication/Signup/Signup";
import Following from "./Components/Following/following";
import ChangePassword from "./Components/changePassword/changePassword";

import Navbar from './Components/NavBar/Nav';
import Tweet from './Components/Tweet/Tweet';
import Profile from './pages/profile/Profile';
import Settings from './pages/settings';

import { UserContext } from "./hooks/useContext";
import {
  getUserData,
  useLogin,
  getUserToken,
  isLoggedIn
} from "./hooks/useLogin";
function App() {
  isLoggedIn();
   let USERDATA = getUserData()
  return (
    <UserContext.Provider value={USERDATA}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/tweet" element={<TweetingContainer />} />
          <Route path="/trending" element={<TrendingMobilePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/bookmark" element={<BookMarksPage />} />
          <Route path="/chat" element={<Chat />} />
          <Route
            path="/tweet/desktoptrending"
            element={<TrendingDesktopPage />}
          />
          <Route path="/settings" element={<Settings />} />
          <Route path="/following" element={<Following />} />
          <Route path="/changePassword" element={<ChangePassword />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
