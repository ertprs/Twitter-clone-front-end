import styles from "../styles/Tweeting_style/TweetController.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { useEffect} from "react";
import Tweet from "./Tweet/Tweet";
import Nav from "./NavBar/Nav";
import Swal from "sweetalert2";
import { Circles } from "react-loader-spinner";

function TweetingContainer() {
  const [trends, setTrends] = useState<any>([]);
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxQGdtYWlsLmNvbSIsImlhdCI6MTY0NTcyODY4MywiZXhwIjoxNjQ1NzQ2NjgzfQ.5rCiKPvdCDojk2VIwlbfua9ZiDQa88dz83HuekXb-oM";

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/trends", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setTrends(res.data.data.trending);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [newheight, setNewHeight] = useState("22px");
  const [modal, setModal] = useState(false);
  const [whoCanReplay, setWhoCanReplay] = useState("Everyone");
  const [imageUrl, setImageUrl] = useState("");
  const [imageHeight, setImageHeight] = useState("");
  const [imageWidth, setImageWidth] = useState("");
  const [exitImage, setExitImage] = useState("");

  const [enteredText, setEnteredText] = useState("");
  const [enteredImg, setEnteredImg] = useState<null | File>(null);
  const [loading, setLoading] = useState(false);

  const formData = new FormData();
  const addTextHandler = async (event: any) => {
    formData.append("messageBody", enteredText);
    formData.append("tweetImage", enteredImg as File);
    formData.append("whoCanReply", whoCanReplay);

    try {
      setLoading(true);
      const data = await axios.post(
        "https://tweetaclone.herokuapp.com/tweet",
        formData,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxOUBnbWFpbC5jb20iLCJpYXQiOjE2NDU2NDY5NTgsImV4cCI6MTY0NTY2NDk1OH0.OJWzpfqfXy8Nyqjy3GX4AfVIKoRri8TluqMg0ct3pOI",
            "Accept-Language": "en-US,en;q=0.8",
            "Content-Type": `multipart/form-data`,
          },
        }
      );

      Swal.fire("Hey Twitee!", "Tweet posted!", "success");
      console.log(data);
      setLoading(false);
      setEnteredText("");
      removeImage();
      setEnteredImg(null);
    } catch (e: any) {
      console.log(e.response.data);
      setLoading(false);
    }

    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }
  };

  // function increaseHeight(e: any) {
  //   let changeHeight = e.target.scrollHeight;

  //   setNewHeight(changeHeight);

  //   if (e.target.value === "") {
  //     setNewHeight("25px");
  //   }
  // }

  //get text of who can replay
  function getText(e: any) {
    setWhoCanReplay(e.currentTarget.textContent);
    setModal(false);
  }

  const getImage = (e: any) => {
    setImageUrl(URL.createObjectURL(e.target.files[0]));
    setEnteredImg(e.target.files ? e.target.files[0] : null);
    console.log(e.target.files[0]);
    setImageHeight("50%");
    setImageWidth("50%");
    setExitImage("https://img.icons8.com/ios/32/ff0000/close-window.png");
  };

  function removeImage() {
    setImageUrl("");
    setImageHeight("");
    setImageWidth("");
    setExitImage("");
  }

  return (
    <>
      <Nav />
      <div className={styles["tweet-wrapper"]}>
        {/* Tweeting something content */}
        <div>
          <div className={styles["tweet-heading"]}>
            <h3>Tweet something</h3>
            <div className={styles.underline}></div>
            <div className={styles["write-message"]}>
              <img
                src="https://www.findjerry.tech/static/media/jerry2.a509e534aa3f11de93e1.png"
                className={styles["user-image"]}
                alt="user"
              />
              <motion.textarea
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 2 }}
                placeholder="What's happening?"
                // onChange={(e) => increaseHeight(e)}
                style={{ height: newheight }}
                value={enteredText}
                onChange={(e) => setEnteredText(e.target.value)}
              ></motion.textarea>
            </div>

            <div className={styles["set-media-image"]}>
              <img
                alt=""
                src={imageUrl ? imageUrl : ""}
                style={{
                  width: imageWidth,
                  height: imageHeight,
                  borderRadius: "4px",
                }}
              />
              <span onClick={removeImage}>
                <img src={exitImage} alt="" />
              </span>
            </div>

            <div className={styles["select-media-container"]}>
              <div className={styles["select-media"]}>
                {/* select media */}

                <p style={{ display: "none" }}>
                  <input
                    type="file"
                    id="file"
                    accept="image/*"
                    name="image"
                    onChange={(e) => getImage(e)}
                  />
                </p>

                <p className={styles["select-image"]}>
                  <label htmlFor="file">
                    <img
                      src="https://img.icons8.com/material-outlined/48/2F80ED/image.png"
                      alt="img"
                    />
                  </label>
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
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                type="submit"
                onClick={addTextHandler}
              >
                {loading === true ? (
                  <Circles
                    color="#FFFFFF"
                    height={20}
                    width={20}
                    wrapperStyle={{ justifyContent: "center" }}
                  />
                ) : (
                  "Tweet"
                )}
              </motion.button>
            </div>
          </div>

          {/* select everyone or who i follow */}
          <div
            className={
              modal
                ? styles["replierContainer"]
                : styles["hideReplierContainer"]
            }
          >
            <h3>Who can reply?</h3>
            <p>Choose who can reply</p>
            <a href="/" className={styles["image-n-text"]}>
              <img
                className={styles["media-image"]}
                src="https://img.icons8.com/material-rounded/28/000000/globe--v1.png"
                alt="img"
              />
              <h3 onClick={(e) => getText(e)}>Everyone</h3>
            </a>
            <a className={styles["image-n-text"]}>
              <img
                className={styles["media-image"]}
                src="https://img.icons8.com/ios-glyphs/30/000000/group-foreground-selected.png"
                alt="img"
              />
              <h3 onClick={(e) => getText(e)}>People you follow</h3>
            </a>
          </div>

          {/*  Fix your component here => 
          Tweet, retweet body */}

          <div className={styles["tweet-body"]}>
            <Tweet />
          </div>
        </div>
        {/* Trending and who to follow content */}

        <div className={styles["trending-n-follow"]}>
          <div className={styles.trending}>
            <h3>trends for you</h3>
            <div className={styles.underline}></div>
            <div className={styles["trending-content"]}>
              <a href="/tweet/desktoptrending">
                #Programming
                <span>213k Tweets</span>
              </a>
            </div>
            <div className={styles["trending-content"]}>
              <a href="/tweet/desktoptrending">
                #Programming
                <span>213k Tweets</span>
              </a>
            </div>
            <div className={styles["trending-content"]}>
              <a href="/tweet/desktoptrending">
                #Programming
                <span>213k Tweets</span>
              </a>
            </div>
            <div className={styles["trending-content"]}>
              <a href="/tweet/desktoptrending">
                #Programming
                <span>213k Tweets</span>
              </a>
            </div>
            <div className={styles["trending-content"]}>
              <a href="/tweet/desktoptrending">
                #Programming
                <span>213k Tweets</span>
              </a>
            </div>
            <div className={styles["trending-content"]}>
              <a href="/tweet/desktoptrending">
                #Programming
                <span>213k Tweets</span>
              </a>
            </div>
          </div>
          <div className={styles["who-to-follow"]}>
            <h3>Who to follow</h3>
            <div className={styles.underline}></div>

            {/* Who to follow sugestion container */}

        <div className={styles["trending-n-follow"]}>
        <div className={styles.trending}>
          <h3>trends for you</h3>
          <div className={styles.underline}></div>
          {Object.keys(trends).map((trend: string) => (
            <div key={trend} className={styles["trending-content"]}>
              <a href="/">{trend}</a>
              <p>{trends[trend].length} Tweets</p>
            </div>
          ))}
        </div>
       </div>

        
          <div className={styles["who-to-follow" ]}>
                <h3>Who to follow</h3>
                <div className={styles.underline}></div>
            <div className={styles["suggest-container"]}>
              <div className={styles["suggest-content"]}>
                <div className={styles["suggest-user"]}>
                  <img src="https://www.findjerry.tech/static/media/jerry2.a509e534aa3f11de93e1.png" />
                  <h3>
                    Jerry Idoko Agada fdfdfdfdfdf dfdf
                    <span>230k followers</span>
                  </h3>
                  <button>
                    <span></span>follow
                  </button>
                </div>
                <Link to="">
                  Photographer and filmmake bsed in Nigeria Nollywoodfilmmake
                  bsed in Nigeria Nollywood
                </Link>
                <img src="https://previews.123rf.com/images/dagadu/dagadu1008/dagadu100800015/7511808-.jpg?fj=1" />

                <div className={styles.underline}></div>
              </div>
              <div className={styles["suggest-content"]}>
                <div className={styles["suggest-user"]}>
                  <img src="https://www.findjerry.tech/static/media/jerry2.a509e534aa3f11de93e1.png" />
                  <h3>
                    Softtechy Developer fdfdfdfdfdf dfdf
                    <span>120k followers</span>
                  </h3>
                  <button>
                    <span></span>follow
                  </button>
                </div>
                <Link to="">
                  Photographer and filmmake bsed in Nigeria Nollywoodfilmmake
                  bsed in Nigeria Nollywood
                </Link>
                <img src="https://previews.123rf.com/images/dagadu/dagadu1008/dagadu100800015/7511808-.jpg?fj=1" />
              </div>
            </div>
            {/* End of sugestion container box */}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default TweetingContainer;
