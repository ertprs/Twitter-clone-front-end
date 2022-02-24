import classes from "./Tweet.module.css";
import { FiMessageSquare, FiHeart, FiBookmark } from "react-icons/fi";
import { IoIosRepeat } from "react-icons/io";
import { AiOutlineSend } from "react-icons/ai";
import axios from "axios";
import { useEffect, useState } from "react";
import Moment from 'moment';

const Tweet = () => {
  const [followerTweet, setFollowerTweet] = useState([]);
  const [followerRetweet, setFollowerRetweet] = useState([]);
  const [isbookMark, setIsBookMark] = useState(false)
  const [countBk, setCountBk] = useState(0);

  const url = "http://localhost:4000/api/viewtweet/?pageNo=1&pageSize=9";

  const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imlkb2tvYWdhZGFAZ21haWwuY29tIiwiaWF0IjoxNjQ1NjI0NzU0LCJleHAiOjE2NDU2NDI3NTR9.PyIfXPx3AfEvVMRh1GHWisuQsW0fVVr5Iovdtar7288";

  const authorised = {
    headers: {
      Authorization: "Bearer " + token,
    }
  }

  const getFollowerTweet = async () => {
    let result = await axios.get(url, authorised);

    setFollowerTweet(result.data.data.tweet);
    setFollowerRetweet(result.data.data.retweet);
    console.log(result.data.data);
  };

  useEffect(() => {
    getFollowerTweet();
  }, []);

  
//book mark a tweet 

const bookMarkTweet =  (tweetId:string)=>{

  const postData= {isBookmark:true}
  const bookMarkUrl =  'http://localhost:4000/tweet/'+tweetId+'/bookmark'

  
  if(isbookMark ===false){

    fetch(bookMarkUrl,{
      method:"POST",
      body:JSON.stringify(postData),
      headers: {
        Authorization: "Bearer " + token,
      },
      

    }).then(res=>res.json())
    .then(data=>console.log(data));

    //
    setCountBk(1)
  }else{
    setIsBookMark(true)
    setCountBk(0)
  }

}




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
                <p className={classes.person_date}>{Moment(val.createdAt).format("DD-MM-YYYY hh:ss")}</p>
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
                    <span className={classes.button}>Comments</span>
                  </span>
                </button>
                <button>
                  <span>
                    <IoIosRepeat className={classes.icons} />
                    <span className={classes.button}>Retweets</span>
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
                    <span className={classes.button} onClick={()=>bookMarkTweet(val._id)}>Saved</span>
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
                  placeholder="Tweet your reply"
                  // rows= {5} cols= {40}
                  // className={classes.input}
                ></textarea>
                <span className={classes.iconBox}>
                  <AiOutlineSend className={classes.icon} />
                </span>
              </form>
            </div>
          </div>
        </div>
      ))}
    </>
  );


};

export default Tweet;
