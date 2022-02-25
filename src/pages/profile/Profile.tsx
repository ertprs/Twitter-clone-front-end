import React from "react";

import ProfileHeader from "../../Components/profile/ProfileHeader";
import "./Profile.css";

import Tweet from "../../Components/profile/Tweet";
import TweetNav from "../../Components/profile/TweetNav";

const Profile = () => {
  return (
    <div>
      <ProfileHeader />
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
