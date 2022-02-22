import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Following/following";
import { PersonPlusFill } from "react-bootstrap-icons";

function FollowingComponent(props:any) {
//   const [following, setFollowing] = useState([]);

    // useEffect(() => {
    //   const getFollowing = async () => {
    //     try {
    //       const res = await axios(
    //         `http://localhost:3000/api/follow/?pageNo=1&pageSize=20`,
    //         {
    //           headers: {
    //             Authorization:
    //               "Bearer " +
    //               "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxQGdtYWlsLmNvbSIsImlhdCI6MTY0NTU0OTM2NSwiZXhwIjoxNjQ1NTY3MzY1fQ.VsKioB8rYVDgqbE-1w-vpvLu6RvA9eYW-uSnT-G9VAU", //the token is a variable which holds the token
    //           },
    //         }
    //       );
    //       setFollowing(res.data.data);
    //     //   console.log(following)
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   };
    //   getFollowing();
    // }, []);


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
