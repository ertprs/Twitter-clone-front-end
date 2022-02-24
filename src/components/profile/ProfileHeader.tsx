import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProfileHeader.css";
import Navbar from '../NavBar/Nav'
// import "@fortawesome/fontawesome-free/css/all.min.css";
import {

  FaPlus,

} from "react-icons/fa";
const ProfileHeader = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="container-fluid header-img">
        <img
          className="banner_img"
          src="https://res.cloudinary.com/dveib1w9c/image/upload/v1645016471/tweeter/3abd6960b68914a11c9eb3e8defc5a0b_jryzek.png"
          alt="img"
        />
      </div>
      <div className="container negate-margin">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-4 ">
                <div className="spacer">
                  <img
                    className="avatar-profile"
                    src="https://res.cloudinary.com/dveib1w9c/image/upload/v1645020784/tweeter/49c8abf0eabd92fb663acc1f6e48907a_uv49b2.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <br />
                <div className="row">
                  <div className="col-sm-6">
                    <h5>Daniel Jenson</h5>
                  </div>
                  <div className="col-sm-6">
                    2,569 Following 10.8K Followers
                  </div>
                  <div className="col-sm-12">
                    Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
             
                <button className="btn btn-primary" style={{padding:'10px'}}>
                  <FaPlus className="" />
                  follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
