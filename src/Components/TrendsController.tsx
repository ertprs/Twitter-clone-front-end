import styles from "../styles/Tweeting_style/TweetController.module.css"
import {motion} from "framer-motion";
import { useState } from "react";
import Tweet from "./profile/Tweet";

function TrendsController() {
  const [newheight, setNewHeight] = useState("22px");
  const [modal, setModal] = useState(false);
  const [whoCanReplay, setWhoCanReplay] = useState("Everyone");
  const [imageUrl, setImageUrl] = useState("");
  const [imageHeight, setImageHeight] = useState("");
  const [imageWidth, setImageWidth] = useState("");
  const [exitImage, setExitImage]  = useState("");

  function increaseHeight(e: any) {
    let changeHeight = e.target.scrollHeight;

    setNewHeight(changeHeight);

    if (e.target.value === "") {
      setNewHeight("25px");
    }
  }

  //get text of who can replay
  function getText(e: any) {
    setWhoCanReplay(e.currentTarget.textContent);
    setModal(false);
  }

  const getImage = (e:any)=>{
    setImageUrl(URL.createObjectURL(e.target.files[0]));
    setImageHeight("50%");
    setImageWidth("50%");
    setExitImage("https://img.icons8.com/ios/32/ff0000/close-window.png");
  }

  function removeImage(){
    setImageUrl("");
    setImageHeight("");
    setImageWidth("");
    setExitImage("");
  }

  return (
    <>
      <div className = {styles["tweet-wrapper"]}>
        <div>
        
          <div 
            className={modal ? styles["replierContainer"]: styles["hideReplierContainer"]}
          >
            <h3>Who can reply?</h3>
            <p>Choose who can reply</p>
            <a className={styles["image-n-text"]}>
              <img
                className= {styles["media-image"]}
                src="https://img.icons8.com/material-rounded/28/000000/globe--v1.png"
                alt="img"
              />
              <h3 onClick={(e) => getText(e)}>Everyone</h3>
            </a>
            <a className= {styles["image-n-text"]}>
              <img
                className= {styles["media-image"]}
                src="https://img.icons8.com/ios-glyphs/30/000000/group-foreground-selected.png"
                alt="img"
              />
              <h3 onClick={(e) => getText(e)}>People you follow</h3>
            </a>
          </div>

        
          <div className={styles["tweet-body" ]}>
            <Tweet/>
          </div>
        </div>

      </div>
    </>
  );
}

export default TrendsController;
