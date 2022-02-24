import axios from "axios";
import { createContext, useEffect, useState } from "react";

export interface iFollowing {
  followerTweet: [];
  bookMarkTweet: (id: string) => void;
  handleReTweet: (id: string) => void;
  isbookMark: boolean;
  followerRetweet:boolean;
}

export const followingContext = createContext<iFollowing>(null!);

function FollowingProvider({ children }: { children: React.ReactNode }) {
  const [followerTweet, setFollowerTweet] = useState<[]>([]);
  const [followerRetweet, setFollowerRetweet] = useState(false);
  const [isbookMark, setIsBookMark] = useState(false);

  const url = "http://localhost:4000/api/viewtweet/?pageNo=1&pageSize=9";

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIyOUBnbWFpbC5jb20iLCJpYXQiOjE2NDU3MTk1NzksImV4cCI6MTY0NTczNzU3OX0.lCWqs5wEPEoEMZM81wovT83IrBatc6A43mc7uQ9I_6Y";

  const authorised = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  const getFollowerTweet = async () => {
    let result = await axios.get(url, authorised);

    setFollowerTweet(result.data.data.tweet);
  };

  // set  the content of the following tweet properts

  useEffect(() => {
    getFollowerTweet();
  }, []);


  // function that handle bookmarking

  const bookMarkTweet = (tweetId: string) => {

    bookMarkNewTweet(tweetId);
   
  };



  //handle bookmarking
  const bookMarkNewTweet = async (tweetId: string)=>{

    const postData= {isBookmark:true}

    const bookMarkUrl = "http://localhost:4000/tweet/" + tweetId + "/bookmark";

    fetch(bookMarkUrl, {
      method: "POST",
      body:JSON.stringify(postData),

      headers: {
        Authorization: "Bearer " + token,'Content-Type': 'application/json'
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data.data.isBookmark)).catch((err:any)=>console.log("Deleted bookmark"));
    getFollowerTweet();
  }

  // get all book mark of a login user

  const getAllUserBookMark = async ()=>{


    const bookMarkUrl = "http://localhost:4000/tweet/bookmark";

    fetch(bookMarkUrl, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,'Content-Type': 'application/json'
      },
    })
      .then((res) => res.json())
      .then((data) =>{
        data.data.map((val:any)=>{
          setIsBookMark(val.isBookmark)
        })
      
      }).catch((err:any)=>console.log("deleted..."));
    getFollowerTweet();
  }

// rerender getAllBookmark function

useEffect(()=>{
  getAllUserBookMark()
},[])



  //handle retweet count


  const handleReTweet = async (tweetId: string)=>{


    const retweetUrl = "http://localhost:4000/tweeting/retweet/" + tweetId;

    fetch(retweetUrl, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data.data)).catch((err:any)=>console.log("Deleted bookmark"));
    getFollowerTweet();
  }

  return (
    <followingContext.Provider
      value={{
        followerTweet,
        bookMarkTweet,
        isbookMark,
        handleReTweet,
        followerRetweet,
      }}
    >
      {children}
    </followingContext.Provider>
  );
}

export default FollowingProvider;

function getFollowing(): iFollowing {
  throw new Error("Function not implemented.");
}
