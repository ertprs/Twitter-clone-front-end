import React,{useContext} from 'react'
import {UserContext} from '../../hooks/useContext'
const Home = () => {
  const msg=useContext(UserContext)
  return (
    <div>
        <h1>Tweeter Team A{msg}</h1>
    </div>
  )
}

export default Home