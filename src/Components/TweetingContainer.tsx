import styles from "../styles/Tweeting_style/TweetController.module.css"
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import { useState } from "react";
import Tweet from "./Tweet/Tweet";
import Nav from "./NavBar/Nav";

function TweetingContainer() {
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
    <Nav/>
      <div className = {styles["tweet-wrapper"]}>
        {/* Tweeting something content */}
        <div>
          <div className={styles["tweet-heading"]}>
            <h3>Tweet something</h3>
            <div className= {styles.underline}></div>
            <div className={styles["write-message"]}>
              <img
                src="https://www.findjerry.tech/static/media/jerry2.a509e534aa3f11de93e1.png"
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
                
                {/* select media */}
                
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

          {/* select everyone or who i follow */}
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

          {/*  Fix your component here => 
          Tweet, retweet body */}

          <div className={styles["tweet-body" ]}>
         
           <Tweet />
          </div>
        </div>
        {/* Trending and who to follow content */}


        <div className= {styles["trending-n-follow"]}>
          <div className= {styles.trending}>
              <h3>trends for you</h3>
              <div className={styles.underline}></div>
              <div className = {styles["trending-content"]}>
                  <Link to = "/tweet/desktoptrending">#Programming</Link>
                  <p>213k Tweets</p>
              </div>
              <div className ={styles["trending-content" ]}>
                  <Link to = "">#Devchallenges</Link>
                  <p>123k Tweets</p>
              </div>
              <div className = {styles["trending-content" ]}>
                  <Link to = "">#frontend</Link>
                  <p>43k Tweets</p>
              </div>
              <div className = {styles["trending-content" ]}>
                  <Link to = "">#helsinki</Link>
                  <p>213k Tweets</p>
              </div>
              <div className ={styles["trending-content" ]} >
                  <Link to = "">#100DaysOfCode</Link>
                  <p>213k Tweets</p>
              </div>
              <div className = {styles["trending-content"]}>
                  <Link to = "">#learntocode</Link>
                  <p>213k Tweets</p>
              </div>
              
              </div>
          <div className={styles["who-to-follow" ]}>
                <h3>Who to follow</h3>
                <div className={styles.underline}></div>

                {/* Who to follow sugestion container */}

                <div className={styles["suggest-container"]}>

                    <div className={styles["suggest-content"]}>
                    <div className = {styles["suggest-user"]}>
                        <img src="https://www.findjerry.tech/static/media/jerry2.a509e534aa3f11de93e1.png"/>
                        <h3>Jerry Idoko Agada fdfdfdfdfdf dfdf<span>230k followers</span></h3>
                        <button><span></span>follow</button>
                    </div>
                    <Link to = "">Photographer and filmmake bsed in Nigeria Nollywoodfilmmake bsed in Nigeria Nollywood</Link>
                    <img src="https://previews.123rf.com/images/dagadu/dagadu1008/dagadu100800015/7511808-.jpg?fj=1"/>

                    <div className={styles.underline}></div>
                    </div>
                    <div className={styles["suggest-content"]}>
                    <div className ={styles["suggest-user"]}>
                        <img src="https://www.findjerry.tech/static/media/jerry2.a509e534aa3f11de93e1.png"/>
                        <h3>Softtechy Developer  fdfdfdfdfdf dfdf<span>120k followers</span></h3>
                        <button><span></span>follow</button>
                    </div>
                    <Link to ="">Photographer and filmmake bsed in Nigeria Nollywoodfilmmake bsed in Nigeria Nollywood</Link>
                    <img src="https://previews.123rf.com/images/dagadu/dagadu1008/dagadu100800015/7511808-.jpg?fj=1"/>

                    </div>
                </div>
                {/* End of sugestion container box */}
          </div>
        </div>
      </div>
    </>
  );
}

export default TweetingContainer;
