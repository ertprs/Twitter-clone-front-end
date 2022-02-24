import styles from "../styles/Tweeting_style/TrendingPage.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

function TrendingMobilePage() {
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

  return (
    <>
      <div className={styles["trending-container-mobile"]}>
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
    </>
  );
}

export default TrendingMobilePage;
