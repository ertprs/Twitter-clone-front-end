import styles from "../styles/Tweeting_style/TweetController.module.css"
import {motion} from "framer-motion";
import { useState } from "react";

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
          <div className={styles["tweet-heading"]}>
            <h3>Tweet something</h3>
            <div className= {styles.underline}></div>
            <div className={styles["write-message"]}>
              <img
                src="https://s3-alpha-sig.figma.com/img/1035/123a/bbcc8da69647a2c109cee000d9cda98f?Expires=1646006400&Signature=fG4VINC1Q0HFu6Bmwdcn8F-5coJmr9jJIe70o9MWkRdg7v9p~A~E~UwcwYC-AYFlEc-k1QUbqrzKV89lxB4mXrnEfGaFLdEGqOc8VZWdJ-t-uKbF5HUNLsKmsZbK3A~bAgbmXC7wkEzLGMFPLXtmPN1FDRLkJnPAt6EYb8~zSkxgpLEbFNhc76h5iO2EQ9TfgoQuyNzX7DaYKQurvoOu8rfwbe15Hlu7Zb66mV-bXz5~eL9uH3EntFdE3gPrxpsjy2ab5Ob6M4nNcFuDzo3XAqHaPV-52GDJYU8kshD43DXqMf-X20WDIvi7v662jh2PZ8-srmh61C7d3CIIWNYPsA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                className={styles["user-image"]}
                alt="user-image"
              />
              <motion.textarea
              initial ={{opacity:0}}
              animate ={{opacity :1}}
              transition={{delay:1, duration:2}}
                placeholder="What's happening?"
                onChange={(e) => increaseHeight(e)}
                style={{ height: newheight }}
              ></motion.textarea>
            </div>

            <div className ={styles["set-media-image"]}><img  src ={imageUrl ?  imageUrl: ""}
            style ={{width:imageWidth, height:imageHeight, borderRadius:"4px"}}
            /><span onClick={removeImage}><img src= {exitImage}/></span></div>

            <div className={styles["select-media-container"]}>
                
              <div className={styles["select-media"]}>
                
                <p style={{display:"none"}}>
                    <input type ="file" id="file" accept ="image/*" name="image" onChange= {(e)=>getImage(e)}/>
                </p>

                <p className={styles["select-image"]}>
                    <label htmlFor = "file">
                <img src="https://img.icons8.com/material-outlined/48/2F80ED/image.png" alt="img"/></label>
                </p>

                <div onClick={() => setModal(!modal)}>
                  <img
                    className={styles["media-image"]}
                    src="https://img.icons8.com/material-rounded/48/2F80ED/globe--v1.png"
                    alt="img"
                  />
                  <h3>{whoCanReplay}</h3>
                </div>
              </div>


              <motion.button
              initial ={{x:"-100vw"}}
              animate ={{x :0}}
              >Tweet</motion.button>
            </div>
          </div>
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
          </div>
          <div className={styles["tweet-body" ]}>
          </div>
        </div>

      </div>
    </>
  );
}

export default TrendsController;
