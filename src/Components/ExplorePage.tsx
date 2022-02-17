import { useState } from "react";
import "../Tweeting_style/ExplorePage.css"
import { AiOutlineSearch } from 'react-icons/ai';


function ExplorePage() {

  return (
    <div className="explore-container">
        <div className="explore-links">
        <ul>
            <li className="active"><a href ="">Top</a></li>
            <li> <a href ="">Latest</a></li>
            <li> <a href ="">People</a></li>
            <li> <a href ="">Media</a></li>
        </ul>
        </div>
        <div className="explore-body">
          <div className = "search-field">
            <p className ="search-icon"><AiOutlineSearch/></p>
            <textarea placeholder="Search"></textarea>
            <button>Search</button>
          </div>
        <div className="explore-content">
        Body of explore
        </div>
        </div>
    </div>
  )
}

export default ExplorePage