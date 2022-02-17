import styles from "../styles/Tweeting_style/TrendingPage.module.css"


function TrendingMobilePage() {
  return (
      <>
    <div className ={styles["trending-container-mobile"]}>

    <div className={styles.trending}>
              <h3>trends for you</h3>
              <div className={styles.underline}></div>
              <div className ={styles["trending-content"]}>
                  <a href ="">#Programming</a>
                  <p>213k Tweets</p>
              </div>
              <div className ={styles["trending-content"]}>
                  <a href ="">#Devchallenges</a>
                  <p>123k Tweets</p>
              </div>
              <div className ={styles["trending-content"]}>
                  <a href ="">#frontend</a>
                  <p>43k Tweets</p>
              </div>
              <div className ={styles["trending-content"]}>
                  <a href ="">#helsinki</a>
                  <p>213k Tweets</p>
              </div>
              <div className ={styles["trending-content"]}>
                  <a href ="">#100DaysOfCode</a>
                  <p>213k Tweets</p>
              </div>
              <div className ={styles["trending-content"]}>
                  <a href ="">#learntocode</a>
                  <p>213k Tweets</p>
              </div>
              
              </div>
    </div>
    </>
  )
}

export default TrendingMobilePage