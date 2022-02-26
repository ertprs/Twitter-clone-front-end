import styles from "../styles/Tweeting_style/TweetController.module.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Nav from "./NavBar/Nav";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../hooks/useContext";
import { BASE_URL } from "../constants/contants";

function TrendsController() {
  const userToken: any = useContext(UserContext);
  const token = userToken.token;
  const params: any = useParams();

  const [hashtags, setHashtags] = useState<any>([]);

  const url = `${BASE_URL}api/trends/hashtag?hashtag=%23${params.id}&pageNo=1&pageSize=5`;

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setHashtags(res.data.data.tweet);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Nav />
      <div className={styles["tweet-wrapper"]}>
        
        <div className={styles["tweet-body"]}>
          {hashtags?.length
            ? hashtags?.map((tag: any) => (
                <>
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-2">
                          <img
                            className="col-sm-12 tweet-avatar"
                            src={tag.userId.profilePic}
                            alt=""
                          />
                        </div>
                        <div className="col-6">
                          <h6 className="user-name-tweet col-12">
                            {tag.userId.firstName + " " + tag.userId.lastName}
                          </h6>
                          <h6 className="user-name-date col-12">
                            {(new Date(tag.updatedAt)).toDateString() + ", " + (new Date(tag.updatedAt)).toTimeString()}
                          </h6>
                        </div>
                        <div className="col-sm-4"></div>
                      </div>
                      <p>
                        {tag.messageBody ? tag.messageBody : ""}
                      </p>
                      {tag.tweetImage ? <img
                        className="card-img-top tweetimage"
                        src={tag.tweetImage}
                        alt=""
                      /> : ""}
    
                      <div className="row">
                        <div className="col-7"></div>
                        <div className="col-5">
                          <div className="row">
                            <div className="col-sm-4 tweet-under">
                              449 Comments
                            </div>
                            <div className="col-sm-4 tweet-under">
                              59k Retweets
                            </div>
                            <div className="col-sm-4 tweet-under">
                              234 Saved
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row text-center">
                        <div className="col-sm-3">
                          <i className="far fa-comment font-ic"> </i> Comments
                        </div>
                        <div className="col-sm-3">
                          <i className="fa fa-retweet font-ic"></i> Retweeted
                        </div>
                        <div className="col-sm-3">
                          <i className="far fa-heart font-ic"></i> Liked
                        </div>
                        <div className="col-sm-3">
                          <i className="far fa-bookmark font-ic"></i> Saved
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <div className="col-1">
                          <img
                            className="card-img-top sendimage"
                            src="https://res.cloudinary.com/dveib1w9c/image/upload/v1645018165/tweeter/76776d7ccd43c1602fbc6aa3a6ee5ac5_ekahcu.png"
                            alt=""
                          />
                        </div>
                        <div className="col-11">
                          <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />
                </>
              ))
            : ""}
        </div>

        <div className={styles["who-to-follow"]}>
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
                Photographer and filmmake bsed in Nigeria Nollywoodfilmmake bsed
                in Nigeria Nollywood
              </Link>
              <img src="https://previews.123rf.com/images/dagadu/dagadu1008/dagadu100800015/7511808-.jpg?fj=1" />

              <div className={styles.underline}></div>
            </div>
            <div className={styles["suggest-content"]}>
              <div className={styles["suggest-user"]}>
                <img src="https://www.findjerry.tech/static/media/jerry2.a509e534aa3f11de93e1.png" />
                <h3>
                  Softtechy Developer
                  <span>120k followers</span>
                </h3>
                <button>
                  <span></span>follow
                </button>
              </div>
              <Link to="">
                Photographer and filmmake bsed in Nigeria Nollywoodfilmmake bsed
                in Nigeria Nollywood
              </Link>
              <img src="https://previews.123rf.com/images/dagadu/dagadu1008/dagadu100800015/7511808-.jpg?fj=1" />
            </div>
          </div>
          {/* End of sugestion container box */}
        </div>
      </div>
    </>
  );
}

export default TrendsController;
