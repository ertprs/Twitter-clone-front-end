import React, { useContext } from 'react'
import {followingContext} from "../Components/FollowingProvider"
import CreateTweet from './CreateTweet'
import Navbar from './NavBar/Nav'
import Tweet from './Tweet/Tweet'
import styles from "../styles/Tweeting_style/TweetController.module.css";
import Trending_Follow from './Trending_Follow'
import {RotatingSquare} from "react-loader-spinner";



function TweetContent() {

    const {followerTweet,isLoadingTweet}  = useContext(followingContext)

  return (

<>
<Navbar/>
<div className={styles["tweet-wrapper"]}>
   

<>
<div>
<CreateTweet/>

<div className={styles["tweet-body"]}>

{isLoadingTweet?
    <RotatingSquare
    color="#2F80ED"
    height={70}
    width={70}
    wrapperStyle={{ justifyContent: "center" }}/>
:""}

{followerTweet.map((val:any,index:number) =>(

<Tweet key = {index}
tweetImage = {val.tweetImage}
commentCount = {val.commentCount}
retweetCount = {val.retweetCount}
messageBody = {val.messageBody}
userId ={val.userId}
createdAt ={val.createdAt}
bookMarkTweet = {val.bookMarkTweet}
_id = {val._id}
bookmarkCount ={val.bookmarkCount}
noOfLikes = {val.noOfLikes}

/>

))}
</div>
</div>

<Trending_Follow/>
</>





</div>
</>
  )
}

export default TweetContent