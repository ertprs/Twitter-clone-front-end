import React, { useContext } from "react";
import { followingContext } from "../Components/FollowingProvider";
import CreateTweet from "./CreateTweet";
import Navbar from "./NavBar/Nav";
import Tweet from "./Tweet/Tweet";
import styles from "../styles/Tweeting_style/TweetController.module.css";
import Trending_Follow from "./Trending_Follow";

interface iTweet {
  commentCount: number;
}
function TweetContent() {
  const { followerTweet } = useContext(followingContext);

  return (
    <>
      <Navbar />
      <div className={styles["tweet-wrapper"]}>
        <>
          <div>
            <CreateTweet />

            <div className={styles["tweet-body"]}>
              {followerTweet.map((val: any, index: number) => (
                <Tweet
                  key={index}
                  tweetImage={val.tweetImage}
                  commentCount={val.commentCount}
                  retweetCount={val.retweetCount}
                  messageBody={val.messageBody}
                  userId={val.userId}
                  createdAt={val.createdAt}
                  bookMarkTweet={val.bookMarkTweet}
                  noOfLikes={val.noOfLikes}
                  _id={val._id}
                  bookmarkCount={val.bookmarkCount}
                />
              ))}
            </div>
          </div>

          <Trending_Follow />
        </>

        {/*  Fix your component here => 
          Tweet, retweet body */}
      </div>
    </>
  );
}

export default TweetContent;
