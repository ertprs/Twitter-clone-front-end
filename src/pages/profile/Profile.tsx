import React, { useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";

import ProfileHeader from "../../Components/profile/ProfileHeader";
import "./Profile.css";

import Tweet from "../../Components/profile/Tweet";
import TweetNav from "../../Components/profile/TweetNav";
import axios from "axios";
import { BASE_URL } from "../../constants/contants";
import { AuthContext } from "../../context/Auth.context";
import { useContext } from "react";



const Profile = () => {
  let params = useParams();
  const { user } = useContext(AuthContext);
  const [getProfileError, setGetProfileError] = useState(null);
  const [isFetchingProfile, setIsFetchingProfile] = useState(false);
  const [profile, setProfile] = useState<Record<string, any> | null>(null);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
    
        setIsFetchingProfile(true);
        const { data } = await axios.get(`${BASE_URL}profile/${params.id}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        console.log(data, "user profile");
    
        setProfile(data);
        setIsFetchingProfile(false);
      } catch (e: any) {
        setIsFetchingProfile(false);
        setGetProfileError(e);
      }
    };
    
    fetchData();
  }, [params.id, user.token]);

  return (
    <div>
      <ProfileHeader
        firstName={profile?.user.firstName}
        lastName={profile?.user.lastName}
        bioData={profile?.user.bioData}
        profilePic={profile?.user.profilePic}
        followerCount={profile?.followers.Totalfollowers}
        followingCount={profile?.following.Totalfollowing}
        isFetching={isFetchingProfile}
      />
      {/* <br /> */}
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <TweetNav />
          </div>
          <div className="col-sm-9">
            <Tweet />
            <Tweet />
            <Tweet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
