import React from "react";
import { Input, TextArea } from "../../components/common/Input";
import Button from "../common/Button";
import "./scss/editProfile.scss"

const EditProfile = () => {
  return (
    <div className="container edit-profile">
      <div className="navigation">
        <div className="back"></div>
        <div className="change-password"></div>
      </div>
      <div className="form-container">
        <div className="heading">
            <h3>Change Info</h3>
            <p>Changes will be reflected to every services</p>
        </div>
        <div className="change-profile-pics">
            <div className="photo-input">
                <img src="" alt="" />
            </div>
            <div className="text">CHANGE PHOTO</div>
        </div>
        <div className="form-fields">
          <Input
            onChange={() => {}}
            placeholder="Enter your name"
            name="name"
            label="Name"
            value=""
          />
          <TextArea
            onChange={() => {}}
            placeholder="Enter your bio"
            name="bio"
            label="Bio"
            value=""
          />
          <Input
            onChange={() => {}}
            placeholder="Enter your email"
            name="email"
            label="Email"
            type="email"
            value=""
          />
          <Button className="btn-primary" onClick={() => {}}>Save</Button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
