import classes from "./Tweet.module.css";
import { FiMessageSquare, FiHeart, FiBookmark } from "react-icons/fi";
import { IoIosRepeat } from "react-icons/io";
import { AiOutlineSend } from "react-icons/ai";
import { useContext, useState } from "react";
import { followingContext, iFollowing } from "../FollowingProvider";
import Moment from "moment";

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

  console.log(textField)
  return (
    <>
      {followerTweet.map((val: any, index: number) => (
        <div className={classes.container} key={index}>
          <div className={classes.wrapper}>
            <div className={classes.top}>
              <div className={classes.profile}>
                <img
                  src={val.userId.profilePic}
                  alt="pix"
                  className={classes.profile__img}
                />
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
                alt="journey"
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
                <img
                  src="https://th.bing.com/th?q=Cute+Female+Nurse&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-WW&cc=NG&setlang=en&adlt=strict&t=1&mw=247"
                  alt="pix"
                  className={classes.profile2_img}
                />
              </div>
              <form action="" className={classes.form}>
                <textarea

                onChange={(e)=>getTextFieldValue(e,index)}
                  placeholder="Tweet your reply"
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
