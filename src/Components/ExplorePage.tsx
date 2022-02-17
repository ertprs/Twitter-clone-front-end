import { useState } from "react";
import styles from "../styles/Tweeting_style/ExplorePage.module.css"

import { AiOutlineSearch } from 'react-icons/ai';


function ExplorePage() {

  return (
    <div className={styles["explore-container"]}>
        <div className={styles["explore-links"]}>
        <ul>
            <li className={styles.active}><a href ="">Top</a></li>
            <li> <a href ="">Latest</a></li>
            <li> <a href ="">People</a></li>
            <li> <a href ="">Media</a></li>
        </ul>
        </div>
        <div className={styles["explore-body"]}>
          <div className = {styles["search-field"]}>
            <p className ={styles["search-icon"]}><AiOutlineSearch/></p>
            <textarea placeholder="Search"></textarea>
            <button>Search</button>
          </div>
        <div className={styles["explore-content"]}>
        Body of explore
        </div>
        </div>
    </div>
  )
}

export default ExplorePage