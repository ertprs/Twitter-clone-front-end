import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import FollowingComponent from "../followingComponent/followingComponent";
import "./following.scss";
import axios from "axios";
import {BASE_URL} from "../../constants/contants"

function Following() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [follow, setFollow] = useState([false]);

 

  useEffect(() => {
    const getFollowers= async () => {
      try {
        const res = await axios(
          `http://localhost:3000/api/follow/?pageNo=1&pageSize=20`,
          {
            headers: {
              Authorization:
                "Bearer " +
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxQGdtYWlsLmNvbSIsImlhdCI6MTY0NTU0OTM2NSwiZXhwIjoxNjQ1NTY3MzY1fQ.VsKioB8rYVDgqbE-1w-vpvLu6RvA9eYW-uSnT-G9VAU", //the token is a variable which holds the token
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
          `http://localhost:3000/api/follow/following?pageNo=1&pageSize=5`,
          {
            headers: {
              Authorization:
                "Bearer " +
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxQGdtYWlsLmNvbSIsImlhdCI6MTY0NTU0OTM2NSwiZXhwIjoxNjQ1NTY3MzY1fQ.VsKioB8rYVDgqbE-1w-vpvLu6RvA9eYW-uSnT-G9VAU", //the token is a variable which holds the token
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
        <Modal.Header closeButton>
          <div className="fixed">
            <p>daniel jenson is following </p>
          </div>
        </Modal.Header>
        {followers.length > 0 && followers.map((val:any, index) => (
          <div key={index}>
            <FollowingComponent  name={val.firstName+" "+ val.lastName} />
          </div>
        ))}
      </Modal>
    </>
  );
}

export default Following;
