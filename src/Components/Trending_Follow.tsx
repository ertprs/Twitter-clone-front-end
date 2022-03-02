import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../constants/contants";
import { UserContext } from "../hooks/useContext";
import styles from "../styles/Tweeting_style/TweetController.module.css";
// import { followingContext } from "./FollowingProvider";
import { BeatLoader } from "react-spinners";

function Trending_Follow() {
  // const { followerTweet } = useContext(followingContext);

  const userToken: any = useContext(UserContext);
  const token = userToken.token;

  const [trends, setTrends] = useState<any>([]);
  const [follow, setFollow] = useState<any[]>([]);

  const url = `${BASE_URL}api/trends`;
  const uri = `${BASE_URL}api/follow/suggest/?pageNo=2&pageSize=5`;

  useEffect(() => {
    axios
      .get(url, {
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

    axios
      .get(uri, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setFollow(res.data["suggested-connection"].suggestedConnection);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleFollow = (userId: string) => {
    axios
      .post(`${BASE_URL}api/follow`, { userId }, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      .then((res) => {
        console.log(res.data);
        // setFollow({
        //     item: `following ${item._id}`
        // })
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className={styles["trending-n-follow"]}>
        <div className={styles.trending}>
          <h3>trends for you</h3>
          <div className={styles.underline}></div>
          {Object.keys(trends).length ? (
            Object.keys(trends).map((trend: string) => (
              <div key={trend} className={styles["trending-content"]}>
                <Link to={`/trends/${trend.replace(/#/g, "")}`}>
                  {trend}
                  <span>{trends[trend].length} Tweets</span>
                </Link>
              </div>
            ))
          ) : (
            <BeatLoader color="#2F80ED" />
          )}
        </div>

        <div className={styles["who-to-follow"]}>
          <h3>Who to follow</h3>
          <div className={styles.underline}></div>
          <div className={styles["suggest-container"]}>
            {follow.length ? (
              follow.map((item) => (
                <div className={styles["suggest-content"]}>
                  <div className={styles["suggest-user"]}>
                    <img src={item.profilePic} alt="" />
                    <h3>{`${item.firstName} ${item.lastName}`}</h3>
                    <button onClick={() => handleFollow(item._id)}>
                      <span></span>follow
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <BeatLoader color="#2F80ED" />
            )}

            <div className={styles.underline}></div>
          </div>
        </div>
        {/* End of sugestion container box */}
      </div>
    </>
  );
}

export default Trending_Follow;
