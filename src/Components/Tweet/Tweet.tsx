import classes from "./Tweet.module.css";
import { FiMessageSquare, FiHeart, FiBookmark } from "react-icons/fi";
import { IoIosRepeat } from "react-icons/io";
import { AiOutlineSend } from "react-icons/ai";
import { useContext, useState } from "react";
import { followingContext, iFollowing } from "../FollowingProvider";
import Moment from "moment";
import { Link } from "react-router-dom";
import {CirclesWithBar} from "react-loader-spinner";
import React from "react";



export interface iTweet{
  tweetImage:string;
  commentCount:number;
  retweetCount:number;
  messageBody:string;
  bookMarkTweet:string;
  userId:any;
  createdAt:Date;
  _id:string;
  bookmarkCount:number

}
const Tweet : React.FC<iTweet> = ({
  tweetImage, commentCount, retweetCount, 
  messageBody,userId,createdAt,bookMarkTweet,
  _id,bookmarkCount
}) => {
  const {
    followerTweet,
        isbookMark,
        handleReTweet,
        followerRetweet,
        handleComment,
        textField,
        getTextFieldValue,
        isLoading,
        newHeight
  } = useContext(followingContext);

console.log(followerRetweet);

  const loginUserPic:any = localStorage.getItem("userlogingImage");


  const imageErrorHandler = (e:React.SyntheticEvent<HTMLImageElement>)=>{

    e.currentTarget.src = "https://raw.githubusercontent.com/decadevs/live-project-frontend-tweeter-clone-team-a/main/Screen%20Shot%202022-02-25%20at%208.51.24%20PM.png?token=GHSAT0AAAAAABOGDBLLUQNS3I2GZVBZJMU4YRCN5JA"
  }

  return (
    <>
        <div className={classes.container}>
          <div className={classes.wrapper}>
            <div className={classes.top}>
              <div className={classes.profile}>
                <Link to ="/profile">
                <img
                  src={userId.profilePic}
                 onError ={imageErrorHandler}
                  className={classes.profile__img}
                  alt="pro-img"
                  />
                </Link>
              </div>
              <div className={classes.person}>
                <p className={classes.person_name}>
                  {userId.firstName + " " + userId.lastName}
                </p>
                <p className={classes.person_date}>
                  {Moment(createdAt).format("DD-MM-YYYY hh:ss")}
                </p>
              </div>
            </div>
            <div className={classes.tweet}>
              <p>{messageBody}</p>
            </div>
            <div className={classes.main}>
              <img
                src={tweetImage}
                onError ={imageErrorHandler}
                className={classes.main_img}
                alt="img"
              />
            </div>
            <div>
              <ul className={classes.second}>
                <li>{commentCount} Comments</li>
                <li> {retweetCount} Retweets</li>
                <li>{bookmarkCount} Saved</li>
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
                        _id
                        
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
                      // onClick={()=>bookMarkTweet(_id)}
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
                  alt="pro-img"
                />
                </Link>
              </div>
              <form action="" className={classes.form}>
                <textarea

                onChange={(e)=>getTextFieldValue(e)}
                  placeholder="Tweet your reply"
                  value={textField.value}
                  name= "reply"
                  style ={{height:newHeight.reply}}
                ></textarea>
                <span 

                // onClick={() => handleComment(val._id,index)
                // }
                className={classes.iconBox}>

                  {isLoading ?  
                  <CirclesWithBar
                    color="##2F80ED"
                    height={30}
                    width={30}
                    wrapperStyle={{ justifyContent: "center" }}/>
                    :
                    <AiOutlineSend className={classes.icon} />

                  }
                </span>
              </form>
            </div>
          </div>
        </div>
    </>
  );
};

export default Tweet;
