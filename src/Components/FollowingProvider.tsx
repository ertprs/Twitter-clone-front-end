import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { TRUE } from "sass";
import { BASE_URL } from "../constants/contants";
import { UserContext } from "../hooks/useContext";

export interface iFollowing {
  followerTweet: any[];
  followerCondition: any | boolean[];
  isLoading:boolean;
}

export const followingContext = createContext<iFollowing>(null!);

function FollowingProvider({ children }: { children: React.ReactNode }) {
  const userToken: any = useContext(UserContext);

  const [followerTweet, setFollowerTweet] = useState<any[]>([]);
  const [followerCondition, setFollowerCondition] = useState<any | boolean[]>(
    []
  );
  const [ isLoading, setIsLoading]  = useState(false)

  const url = `${BASE_URL}api/viewtweet/?pageNo=1&pageSize=9`;

  const authorised = {
    headers: {
      Authorization: "Bearer " + userToken.token,
    },
  };

  // set  the content of the following tweet properts

  const getFollowerTweet = async () => {
    try {
      setIsLoading(true);
      let result = await axios.get(url, authorised);
      setFollowerTweet(result.data.data.tweet);
      setFollowerCondition(result.data.data.conditionalTweet);

      console.log(result.data.data);

      if(result){
        setIsLoading(false)
      }
     
    } catch (err: any) {
      console.error(err);
      setIsLoading(false)
    }
  };
  useEffect(() => {
    getFollowerTweet();
  }, []);

  return (
    <followingContext.Provider
      value={{
        followerTweet,
        followerCondition,
        isLoading
      }}
    >
      {children}
    </followingContext.Provider>
  );
}

export default FollowingProvider;
