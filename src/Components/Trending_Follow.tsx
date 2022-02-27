import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { BASE_URL } from '../constants/contants';
import { UserContext } from '../hooks/useContext';
import styles from "../styles/Tweeting_style/TweetController.module.css";
import { followingContext } from './FollowingProvider';

function Trending_Follow() {

  const {followerTweet} = useContext(followingContext)
  
  const userToken:any = useContext(UserContext)
  const token = userToken.token

  const [trends, setTrends] = useState<any>([]);
  const [follow, setFollow] = useState<any>([]);

  const url = `${BASE_URL}api/trends`
  const uri = `${BASE_URL}api/follow/suggest/?pageNo=2&pageSize=5`


  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data)
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
      .then((res)=>{
        console.log(res.data)
        setFollow(res.data.data.suggestedConnection)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    
    <>
     <div className={styles["trending-n-follow"]}>
        <div className={styles.trending}>
          <h3>trends for you</h3>
          <div className={styles.underline}></div>
          {Object.keys(trends).map((trend: string) => (
            <div key={trend} className={styles["trending-content"]}>
            <Link to={`/trends/${trend.replace(/#/g, '')}`}>{trend}
              <span>{trends[trend].length} Tweets</span>
              </Link>
            </div>
          ))}
        </div>

          <div className={styles["who-to-follow" ]}>
                <h3>Who to follow</h3>
                <div className={styles.underline}></div>
            <div className={styles["suggest-container"]}>
              {Object.keys(follow).map((item: string)=>(
                <div className={styles["suggest-content"]}>
                <h3>
                {follow[item].length}
                  <span></span>
                </h3>
                <button>
                  <span></span>follow
                </button>
              </div>
              ))}
                
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
                  Photographer and filmmake bsed in Nigeria Nollywoodfilmmake
                  bsed in Nigeria Nollywood
                </Link>
                <img src="https://previews.123rf.com/images/dagadu/dagadu1008/dagadu100800015/7511808-.jpg?fj=1" />
              </div>
            </div>
            {/* End of sugestion container box */}
          </div>
    
    </>
  )
}

export default Trending_Follow