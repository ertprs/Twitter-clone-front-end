import { useState } from "react";
import "../Tweeting_style/Bookmark.css"


function BookMarksPage() {

  return (
    <div className="bookmark-container">
        <div className="bookmark-links">
        <ul>
            <li className="active"><a href ="">Tweets</a></li>
            <li> <a href ="">Tweets & replay</a></li>
            <li> <a href ="">Media</a></li>
            <li> <a href ="">Likes</a></li>
        </ul>
        </div>
        <div className="bookmark-body">
        Body of Bookmarks
        </div>
    </div>
  )
}

export default BookMarksPage