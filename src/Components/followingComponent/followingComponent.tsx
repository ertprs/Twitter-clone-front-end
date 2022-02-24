import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Following/following";
import { PersonPlusFill } from "react-bootstrap-icons";

function FollowingComponent(props:any) {



  return (
    <Modal.Body>
      <article>
        <div className="header">
          <div className="img-component">
            <img
              src={props.profilePic}
              alt=""
              className="follow-img"
            />
            <div className="center">
              <h4 className="follow-name"> {props.name}</h4>
              <p className="description"> 120k followers</p>
            </div>
          </div>
          <Button className="my-button">
            <PersonPlusFill className="ml-4" /> Follow
          </Button>
        </div>
        <div>
          <p className="biodata">
          {props.bioData}
          </p>
        </div>
      </article>
      <hr></hr>
    </Modal.Body>
  );
}

export default FollowingComponent;
