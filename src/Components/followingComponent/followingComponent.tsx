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
              src="https://images.unsplash.com/photo-1607758164193-19539498ddf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=758&q=80"
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
          <p className="description">
             lorem ipsium lorem ipsium lorem ipsium lorem ipsium lorem
          </p>
        </div>
      </article>
      <hr></hr>
    </Modal.Body>
  );
}

export default FollowingComponent;
