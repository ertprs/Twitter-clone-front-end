import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Follower/follower";
import { PersonPlusFill } from "react-bootstrap-icons";
import axios from "axios";
import { AuthContext } from "../../context/Auth.context";
import { useContext } from "react";

function FollowingComponent(props: any, _id: any) {
  const { user } = useContext(AuthContext);
  console.log(user);

  const instance = axios.create({
    baseURL: "https://tweetaclone.herokuapp.com",
    timeout: 1000,
    headers: {
      Authorization: "Bearer " + user.token,
    },
  });

  const follow = (id: string) => {
    try {
      const res = instance.post("/api/follow", {
        userId: props.id,
      });

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const unfollow = (id: string) => {
    try {
      const res = instance.delete("/api/follow", {
        data: {
          userId: props.id,
        },
      });

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    return props.isFollow ? unfollow(props.id) : follow(props.id);
  };

  return (
    <Modal.Body>
      <article>
        <div className="header">
          <div className="img-component">
            <img src={props.profilePic} alt="" className="follow-img" />
            <div className="center">
              <h4 className="follow-name"> {props.name}</h4>
              <p className="description"> 120k followers</p>
            </div>
          </div>
          <Button className="my-button" onClick={handleClick}>
            {props.isFollow ? "Unfollow" : "Follow"}
          </Button>
        </div>
        <div>
          <p className="biodata">{props.bioData}</p>
        </div>
      </article>
      <hr></hr>
    </Modal.Body>
  );
}

export default FollowingComponent;
