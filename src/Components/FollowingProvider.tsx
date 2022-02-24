import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { BASE_URL } from "../constants/contants";
import { UserContext } from "../hooks/useContext";

export interface iFollowing {
  followerTweet: [];
  bookMarkTweet: (id: string) => void;
  handleReTweet: (id: string) => void;
  isbookMark: boolean;
  followerRetweet:boolean;
}

export const followingContext = createContext<iFollowing>(null!);

function FollowingProvider({ children }: { children: React.ReactNode }) {

  const userToken:any = useContext(UserContext)

  const [followerTweet, setFollowerTweet] = useState<[]>([]);
  const [followerRetweet, setFollowerRetweet] = useState(false);
  const [isbookMark, setIsBookMark] = useState(false);

  const url = `${BASE_URL}api/viewtweet/?pageNo=1&pageSize=9`

  
  const authorised = {
    headers: {
      Authorization: "Bearer " + userToken.token,
    },
  };

  const getFollowerTweet = async () => {
    let result = await axios.get(url, authorised);

    setFollowerTweet(result.data.data.tweet);
  };

  // set  the content of the following tweet properts

  useEffect(() => {
    getFollowerTweet();
  },[]);


  // function that handle bookmarking

  const bookMarkTweet = (tweetId: string) => {

    bookMarkNewTweet(tweetId);
   
  };



  //handle bookmarking
  const bookMarkNewTweet = async (tweetId: string)=>{

    const postData= {isBookmark:true}

    const bookMarkUrl = `${BASE_URL}tweet/${tweetId}/bookmark`;

  
    fetch(bookMarkUrl, {
      method: "POST",
      body:JSON.stringify(postData),

      headers: {
        Authorization: "Bearer " + userToken.token,'Content-Type': 'application/json'
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data.data.isBookmark)).catch((err:any)=>console.log(err));
    getFollowerTweet();
  }

  // get all book mark of a login user

  const getAllUserBookMark = async ()=>{


    const bookMarkUrl = `${BASE_URL}tweet/bookmark`;

    fetch(bookMarkUrl, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + userToken.token,'Content-Type': 'application/json'
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


    const retweetUrl = `${BASE_URL}tweeting/retweet/${tweetId}`;

    fetch(retweetUrl, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + userToken.token
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
