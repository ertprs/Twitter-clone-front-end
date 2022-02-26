import classes from "./Tweet.module.css";
import { FiMessageSquare, FiHeart, FiBookmark } from "react-icons/fi";
import { IoIosRepeat } from "react-icons/io";
import { AiOutlineSend } from "react-icons/ai";
import { useContext, useState } from "react";
import { followingContext, iFollowing } from "../FollowingProvider";
import Moment from "moment";
import { Link } from "react-router-dom";

const Tweet = () => {
  const {
    followerTweet,
        bookMarkTweet,
        isbookMark,
        handleReTweet,
        followerRetweet,
        handleComment,
        textField,
        alertMsg,
        getTextFieldValue
  } = useContext(followingContext);


  const loginUserPic:any = localStorage.getItem("userlogingImage");


  const imageErrorHandler = (e:React.SyntheticEvent<HTMLImageElement>)=>{

    e.currentTarget.src = "https://raw.githubusercontent.com/decadevs/live-project-frontend-tweeter-clone-team-a/main/Screen%20Shot%202022-02-25%20at%208.51.24%20PM.png?token=GHSAT0AAAAAABOGDBLLUQNS3I2GZVBZJMU4YRCN5JA"
  }
console.log(followerTweet);

  return (
    <>
      {followerTweet.map((val: any, index: number) => (
        <div className={classes.container} key={index}>
          <div className={classes.wrapper}>
            <div className={classes.top}>
              <div className={classes.profile}>
                <Link to ="/profile">
                <img
                  src={val.userId.profilePic}
                 onError ={imageErrorHandler}
                  className={classes.profile__img}/>
                </Link>
              </div>
              <div className={classes.person}>
                <p className={classes.person_name}>
                  {val.userId.firstName + " " + val.userId.lastName}
                </p>
                <p className={classes.person_date}>
                  {Moment(val.createdAt).format("DD-MM-YYYY hh:ss")}
                </p>
              </div>
            </div>
            <div className={classes.tweet}>
              <p>{val.messageBody}</p>
            </div>
            <div className={classes.main}>
              <img
                src={val.tweetImage}
                onError ={imageErrorHandler}
                className={classes.main_img}
              />
            </div>
            <div>
              <ul className={classes.second}>
                <li>{val.commentCount} Comments</li>
                <li> {val.retweetCount} Retweets</li>
                <li>{val.bookmarkCount} Saved</li>
              </ul>
            </div>
            <div className={classes.action}>
              <div className={classes.actions}>
                <button>
                  <span>
                    <FiMessageSquare className={classes.icons} />
                    <span 
                    className={classes.button}>Comments</span>
                  </span>
                </button>
                <button>
                  <span>
                    <IoIosRepeat className={classes.icons} />
                    <span 
                    
                    onClick={() =>
                      handleReTweet(
                        val._id
                        
                      )
                    }
                    className={classes.button}>Retweets</span>
                  </span>
                </button>
                <button>
                  <span>
                    <FiHeart className={classes.icons} />
                    <span className={classes.button}>Likes</span>
                  </span>
                </button>
                <button>
                  <span>
                    <FiBookmark className={classes.icons} />
                    <span
                      className={isbookMark ? classes.buttonColor:classes.button}
                      onClick={() =>
                        bookMarkTweet(
                          val._id                          
                        )
                      }
                    >
                      
                      Saved
                    </span>
                  </span>
                </button>
              </div>
            </div>
            <div className={classes.last}>
              <div className={classes.profile2}>
                <Link to ='profile'>
              <img src={loginUserPic}
                onError ={imageErrorHandler}
                  className={classes.profile2_img}
                />
                </Link>
              </div>
              <form action="" className={classes.form}>
                <textarea

                onChange={(e)=>getTextFieldValue(e,index)}
                  placeholder="Tweet your reply"
                  value={textField}
                  // rows= {5} cols= {40}
                  // className={classes.input}
                ></textarea>
                <span 

                onClick={() => handleComment(val._id,index)
                }
                className={classes.iconBox}>
                  <AiOutlineSend className={classes.icon} />
                </span>
              </form>
            </div>
          </div>
          <span>{alertMsg}</span>

        </div>
      ))}
    </>
  );
};

export default Tweet;
