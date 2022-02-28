import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import FollowingComponent from "../followingComponent/followingComponent";
import "./following.scss";
import axios from "axios";

function Following() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [follow, setFollow] = useState([false]);

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxQGdtYWlsLmNvbSIsImlhdCI6MTY0NTczNTEyNSwiZXhwIjoxNjQ1NzUzMTI1fQ.DXm1jTeIGw6zF9R18FBWFcpvQkCyCWZMzGOskKH4JZM"
  const url = 
 

  useEffect(() => {
    const getFollowers= async () => {
      try {
        const res = await axios(
          `${url}api/follow/?pageNo=1&pageSize=20`,
          {
            headers: {
              Authorization:
                "Bearer " +
                token //the token is a variable which holds the token
            },
          }
        );
        const followers = res.data.data.followers
        setFollowers(followers)
          console.log(followers)
      } catch (err) {
        console.log(err);
      }
    };
    getFollowers();
  }, []);

  useEffect(() => {
    const getFollowing = async () => {
      try {
        const res = await axios(
          `${url}api/follow/following?pageNo=1&pageSize=5`,
          {
            headers: {
              Authorization:
                "Bearer " +
               token //the token is a variable which holds the token
            },
          }
        );
        const following = res.data.data.following
        setFollowing(following);
          console.log(following)
      } catch (err) {
        console.log(err);
      }
    };
    getFollowing();
  }, []);

  const followerElement = followers.map(({index,firstName, lastName ,profilePic, bioData}) => (
      <FollowingComponent key={index} name={firstName+" "+ lastName} profilePic={profilePic} bioData={bioData} /> ))



  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Following List
      </Button>
  
      {followers && console.log(followers)}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton >
          <div className="fixed">
            <p>daniel jenson is following </p>
          </div>
        </Modal.Header>
      {followerElement}
      </Modal>
    </>
  );
}

export default Following;
