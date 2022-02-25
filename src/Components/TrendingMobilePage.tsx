import styles from "../styles/Tweeting_style/TrendingPage.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TrendingMobilePage() {
  const [trends, setTrends] = useState<any>([]);
  let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxQGdtYWlsLmNvbSIsImlhdCI6MTY0NTc4ODY2MCwiZXhwIjoxNjQ1ODA2NjYwfQ.dSDAePb5ERs7fH9b8g7fy1QU3ouYtnpm7y0qmDbxNo0"
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

  return (
    <>
      <div className={styles["trending-container-mobile"]}>
        <div className={styles.trending}>
          <h3>trends for you</h3>
          <div className={styles.underline}></div>
          {Object.keys(trends).map((trend: string) => (
            <div key={trend} className={styles["trending-content"]}>
              <Link to="/trends">{trend}</Link>
              <p>{trends[trend].length} Tweets</p>
            </div>
          ))}
        </div>
      </div>
    {/* <div className={styles.trending}>
              <h3>trends for you</h3>
              <div className={styles.underline}></div>
              <div className = {styles["trending-content"]}>
                  <a href = "/tweet/desktoptrending">#Programming
                  <span>213k Tweets</span>
                  </a>
             </div>
             <div className = {styles["trending-content"]}>
                  <a href = "/tweet/desktoptrending">#Programming
                  <span>213k Tweets</span>
                  </a>
             </div>
             <div className = {styles["trending-content"]}>
                  <a href = "/tweet/desktoptrending">#Programming
                  <span>213k Tweets</span>
                  </a>
             </div>
             <div className = {styles["trending-content"]}>
                  <a href = "/tweet/desktoptrending">#Programming
                  <span>213k Tweets</span>
                  </a>
             </div>
             <div className = {styles["trending-content"]}>
                  <a href = "/tweet/desktoptrending">#Programming
                  <span>213k Tweets</span>
                  </a>
             </div>
              
              </div>
    </div> */}
    </>
  );
}

export default TrendingMobilePage;
