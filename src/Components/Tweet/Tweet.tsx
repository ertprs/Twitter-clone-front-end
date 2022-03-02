import classes from "./Tweet.module.css";
import { FiMessageSquare, FiHeart, FiBookmark } from "react-icons/fi";
import { IoIosRepeat } from "react-icons/io";
import { AiOutlineSend } from "react-icons/ai";
import { ChangeEvent, useContext, useState, useEffect } from "react";
import { followingContext, iFollowing } from "../FollowingProvider";
import Moment from "moment";
import { Link } from "react-router-dom";
import { CirclesWithBar } from "react-loader-spinner";
import React from "react";
import { BASE_URL } from "../../constants/contants";
import { UserContext } from "../../hooks/useContext";
import { AuthContext } from "../../context/Auth.context"
import axios from "axios";



export interface iTweet{
  tweetImage:string;
  commentCount:number;
  retweetCount:number;
  messageBody:string;
  bookMarkTweet:string;
  userId:any;
  createdAt:Date;
  _id:string;
  bookmarkCount:number;
  noOfLikes:number;

}
const Tweet : React.FC<iTweet> = ({
  tweetImage, commentCount, retweetCount, 
  messageBody,userId,createdAt,bookMarkTweet,
  _id,bookmarkCount,noOfLikes,
}) => {
  const {
    followerTweet,
  } = useContext(followingContext);

  const [textField, setTextField] = useState<any>("");
  const [newHeight, setNewHeight] = useState<any>("22px");
  const [isLoading, setIsLoading] = useState(false);
  const [isbookMark, setIsBookMark] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [likeTweet, setLikeTweet] = useState(noOfLikes);
  const [allBookMarkCount, setAllBookMarkCount] = useState(bookmarkCount);
  const [allretweetCount, setAllretweetCount] = useState(retweetCount);
  const [isFollowerRetweet, setIsFollowerRetweet] = useState(false);



  const userToken: any = useContext(UserContext);
  const { user } = useContext(AuthContext);


  const authorised = {
    headers: {
      Authorization: "Bearer " + userToken.token,
    },
  };


    //get text field value

  const getTextFieldValue = (e:ChangeEvent<HTMLTextAreaElement>) => {

    setTextField(e.target.value);
          

    setNewHeight(e.target.scrollHeight);

    if (e.target.value === "") {
      setNewHeight(25);
    }
  };


  // reply a tweet


  const handleComment = async (tweetId: string) => {

    try{

    if (textField === "") {
      return console.log("Empty field");
    } else {
      const postData = { content: textField };
      setIsLoading(true)

      const commentUrl = `${BASE_URL}tweet/${tweetId}/comment`;

      fetch(commentUrl, {
        method: "POST",
        body: JSON.stringify(postData),

        headers: {
          Authorization: "Bearer " + userToken.token,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setTextField(" ");
          setNewHeight("22px");
        })
        .catch((err: any) => console.log(err));
      setIsLoading(false);
      getAllUserBookMark();

    }
  }catch(err:any){return console.error(err)}
  }


  //get all user bookmarks

  const getAllUserBookMark = async () => {
    const bookMarkUrl = `${BASE_URL}tweet/bookmark`;

    fetch(bookMarkUrl, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + userToken.token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.data.map((val: any) => {
          return ;
        });
      })
      .catch((err: any) => console.log("deleted..."));
  };

  // rerender getAllBookmark function

  useEffect(() => {
    getAllUserBookMark();
  }, []);


  //handle bookmarking
  const bookMarkNewTweet = async (tweetId: string) => {
    const postData = { isBookmark: true };

    const bookMarkUrl = `${BASE_URL}tweet/${tweetId}/bookmark`;

    fetch(bookMarkUrl, {
      method: "POST",
      body: JSON.stringify(postData),

      headers: {
        Authorization: "Bearer " + userToken.token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data.data.isBookmark))
      .catch((err: any) => console.log(err));
  };

  //handle book marking event listener function
  const handleBookMarkTweet = (tweetId: string) => {
    if(isbookMark){
      bookMarkNewTweet(tweetId);
      setIsBookMark(true)
      setAllBookMarkCount(bookmarkCount)
    }else{
      bookMarkNewTweet(tweetId);
      setIsBookMark(false);
      setAllBookMarkCount(bookmarkCount)

    }
    getAllUserBookMark();
  };


  // get single bookmark

  const getSingleBookMark = async()=>{

    const bookMarkUrl = `${BASE_URL}tweet/bookmark/${_id}/`;


    try {
        const singleBk:any = await axios.get(bookMarkUrl,{
          headers:{Authorization: 'Bearer ' +userToken.token}
        })
console.log(singleBk,"single mark")
        if(singleBk.data.data.isBookmark){

          setIsBookMark(singleBk.data.data.isBookmark);
          setAllBookMarkCount(bookmarkCount);
        }

       

    } catch (error) {
      
    }

  }

//get all like tweets

useEffect(()=>{

const getLikeTweet = async ()=>{

  let likeUrl = `${BASE_URL}tweet/${_id}/like`
  try {

   return await axios.get(likeUrl,{
      headers:{
        Authorization: "Bearer " +userToken.token,
        "Content-Type": "application/json"
      }
    });

    
  } catch (error) {
    
  }
}
getLikeTweet();

if(allBookMarkCount>0){

  setIsBookMark(true)
}
getSingleBookMark();
},[_id]);


const handleLikes = async ()=>{

  const unlikeTweetUrl = `${BASE_URL}tweet/${_id}/like`;
  if(isLike){
    setLikeTweet(Number(likeTweet)-1);

    await axios.delete(unlikeTweetUrl,{headers:{Authorization: 'Bearer ' +userToken.token}});
    setIsLike(false);
  }else{
    setLikeTweet(Number(likeTweet)+1);

    await axios.post(unlikeTweetUrl,{}, {headers:{Authorization: 'Bearer ' +userToken.token,
    "Content-Type": "application/json"}})

    setIsLike(true);

  }
}



//handle retweet count
//
function handleReTweet (id:string){

  if(isFollowerRetweet == false){

    const retweetUrl = `${BASE_URL}tweeting/retweet/${id}`;

    fetch(retweetUrl, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + userToken.token,
      },
    })
      .then((res) => res.json())
      .then((data) =>{console.log(data,"retweeted...")});

      setIsFollowerRetweet(true)
      setAllretweetCount(Number(allretweetCount)+1);
  }else{
    setIsFollowerRetweet(false);
    setAllretweetCount(Number(allretweetCount)-1)

  }

}

const allReTweet = async () => {

  const retweetUrl = `${BASE_URL}tweeting/allretweet`;

  fetch(retweetUrl, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + userToken.token,
    },
  })
    .then((res) => res.json())
    .then((data) =>{
      
      data.data.map((val:any)=>{

        if(val.tweetId.id === _id){
          setIsFollowerRetweet(val.isRetweeted);
          console.log(val.isRetweeted, "check");
          
        }

      })
    })
    .catch((err: any) => console.log(err));
};



//check the length of the like tweet if greater than 0

useEffect(()=>{
  if(likeTweet > 0){
    setIsLike(true);
    allReTweet()
  }
},[_id])
// console.log(isLike, noOfLikes);
  

  const loginUserPic: any = localStorage.getItem("userlogingImage");

  const imageErrorHandler = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src =
      "https://raw.githubusercontent.com/decadevs/live-project-frontend-tweeter-clone-team-a/main/Screen%20Shot%202022-02-25%20at%208.51.24%20PM.png?token=GHSAT0AAAAAABOGDBLLUQNS3I2GZVBZJMU4YRCN5JA";
  };









  return (
    <>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.top}>
            <div className={classes.profile}>
              <Link to="/profile">
                <img
                  src={userId.profilePic}
                  onError={imageErrorHandler}
                  className={classes.profile__img}
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
              onError={imageErrorHandler}
              className={classes.main_img}
            />
          </div>
          <div>
            <ul className={classes.second}>
              <li>{commentCount} Comments</li>
              <li> {allretweetCount} Retweets</li>
              <li>{bookmarkCount} Saved</li>
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
                  <span
                    onClick={() => handleReTweet(_id)}
                    className={classes.button}
                  >
                    Retweets
                  </span>
                </span>
              </button>
              <button onClick = {()=>handleLikes()}>
                <span style ={{color: isLike ? "red":"green"}}>
                  <FiHeart className={classes.icons} />
                  <span className={classes.button}>Likes</span>
                </span>
              </button>
              <button>
                <span>
                  <FiBookmark className={classes.icons} />
                  <span
                    className={
                      isbookMark ? classes.buttonColor : classes.button
                    }
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
              <Link to="profile">
                <img
                  src={loginUserPic}
                  onError={imageErrorHandler}
                  className={classes.profile2_img}
                />
                </Link>
              </div>
              <form action="" className={classes.form}>
                <textarea

                onChange={(e)=>getTextFieldValue(e)}
                  placeholder="Tweet your reply"
                  value={textField}
                  name= {"message"}
                  style ={{height:newHeight}}
                ></textarea>
                <span 
                onClick={() => handleComment(_id)}
                className={classes.iconBox}>

                  {isLoading ?  (
                  <CirclesWithBar
                    color="#2F80ED"
                    height={30}
                    width={30}
                    wrapperStyle={{ justifyContent: "center" }}
                  />
                ) : (
                  <AiOutlineSend className={classes.icon} />
                )}
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tweet;
