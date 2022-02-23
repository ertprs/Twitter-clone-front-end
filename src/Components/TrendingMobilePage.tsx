import styles from "../styles/Tweeting_style/TrendingPage.module.css"


function TrendingMobilePage() {
  return (
      <>
    <div className ={styles["trending-container-mobile"]}>

    <div className={styles.trending}>
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
    </div>
    </>
  )
}

export default TrendingMobilePage