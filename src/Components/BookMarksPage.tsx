import { useState } from "react";
import styles from "../styles/Tweeting_style/Bookmark.module.css";


function BookMarksPage() {

  return (

    <div className={styles["bookmark-container"]}>
       
        <ul className={styles["bookmark-links"]}>
            <li className={styles.active}><a href ="">Tweets</a></li>
            <li> <a href ="">Tweets & replay</a></li>
            <li> <a href ="">Media</a></li>
            <li> <a href ="">Likes</a></li>
        </ul>
        <div className={styles["bookmark-body"]}>
        Body of Bookmarks
        </div>
    </div>
  )
}

export default BookMarksPage