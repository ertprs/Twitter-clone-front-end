import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { BASE_URL } from "../constants/contants";
import { UserContext } from "../hooks/useContext";
import { AuthContext } from "../context/Auth.context"

export interface iFollowing {
  followerTweet: [];
  followerRetweet: boolean;
  textField: any;
  isLoading: boolean;
  newHeight: any;
  isLoadingTweet: boolean;
}

export const followingContext = createContext<iFollowing>(null!);

function FollowingProvider({ children }: { children: React.ReactNode }) {
  const userToken: any = useContext(UserContext);
  const { user } = useContext(AuthContext);

  // console.log(user, "DATA")


  const [followerTweet, setFollowerTweet] = useState<[]>([]);
  const [followerRetweet, setFollowerRetweet] = useState(false);
  const [textField, setTextField] = useState<any>({reply:""});
  const [isLoading, setIsLoading] = useState(false);
  const [newHeight, setNewHeight] = useState<any>({reply:22})
  const [isLoadingTweet, setIsLoadingTweet] = useState(false)


  const url = `${BASE_URL}api/viewtweet/?pageNo=1&pageSize=9`;

  const authorised = {
    headers: {
      Authorization: "Bearer " + userToken.token,
    },
  };

  // set  the content of the following tweet properts

  const getFollowerTweet = async () => {

    try {
      setIsLoadingTweet(true)
      let result = await axios.get(url, authorised);

      setFollowerTweet(result.data.data.tweet);

      console.log(result.data.data.tweet, "**())")

      if (result) {
        setIsLoadingTweet(false)
      }
    }
    catch (err: any) {
      setIsLoadingTweet(false)
    }
  }
  useEffect(() => {
    getFollowerTweet();
  }, []);

  // function that handle bookmarking

  

  

  // get all book mark of a login user







  return (
    <followingContext.Provider
      value={{
        followerTweet,
        followerRetweet,
        textField,
        isLoading,
        newHeight,
        isLoadingTweet
      }}
    >
      {children}
    </followingContext.Provider>
  );
}

export default FollowingProvider;

