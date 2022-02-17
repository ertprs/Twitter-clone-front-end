import React from 'react'
import "../Tweeting_style/TrendingPage.css";

function TrendingMobilePage() {
  return (
      <>
    <div className ="trending-container-mobile">

    <div className="trending">
              <h3>trends for you</h3>
              <div className="underline"></div>
              <div className ="trending-content">
                  <a href ="">#Programming</a>
                  <p>213k Tweets</p>
              </div>
              <div className ="trending-content">
                  <a href ="">#Devchallenges</a>
                  <p>123k Tweets</p>
              </div>
              <div className ="trending-content">
                  <a href ="">#frontend</a>
                  <p>43k Tweets</p>
              </div>
              <div className ="trending-content">
                  <a href ="">#helsinki</a>
                  <p>213k Tweets</p>
              </div>
              <div className ="trending-content">
                  <a href ="">#100DaysOfCode</a>
                  <p>213k Tweets</p>
              </div>
              <div className ="trending-content">
                  <a href ="">#learntocode</a>
                  <p>213k Tweets</p>
              </div>
              
              </div>
    </div>
    </>
  )
}

export default TrendingMobilePage