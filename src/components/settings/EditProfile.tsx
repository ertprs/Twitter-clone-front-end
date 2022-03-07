import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Input, TextArea } from "../common/Input";
import { useSettings } from "../../hooks/useSettings";
import Button from "../common/Button";
import "./scss/editProfile.scss";

const EditProfile = () => {
  const { selectPhoto, image } = useSettings();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    bio: "",
    email: "",
  });
  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="container edit-profile">
      <div className="navigation">
        <div className="back"></div>
        <div className="change-password"></div>
      </div>
      <div className="form-container">
        <div className="heading">
          <div>
            <h3>Change Info</h3>
            <p>Changes will be reflected to every services</p>
          </div>
          <div>
            <a href="/changePassword">change password</a>
          </div>
        </div>
        
      
        <div className="change-profile-pics">
          <label htmlFor="upload-button">
            <div className="photo-input">
              <img
                src={
                  image.preview ||
                  "https://s3-alpha-sig.figma.com/img/1035/123a/bbcc8da69647a2c109cee000d9cda98f?Expires=1646006400&Signature=fG4VINC1Q0HFu6Bmwdcn8F-5coJmr9jJIe70o9MWkRdg7v9p~A~E~UwcwYC-AYFlEc-k1QUbqrzKV89lxB4mXrnEfGaFLdEGqOc8VZWdJ-t-uKbF5HUNLsKmsZbK3A~bAgbmXC7wkEzLGMFPLXtmPN1FDRLkJnPAt6EYb8~zSkxgpLEbFNhc76h5iO2EQ9TfgoQuyNzX7DaYKQurvoOu8rfwbe15Hlu7Zb66mV-bXz5~eL9uH3EntFdE3gPrxpsjy2ab5Ob6M4nNcFuDzo3XAqHaPV-52GDJYU8kshD43DXqMf-X20WDIvi7v662jh2PZ8-srmh61C7d3CIIWNYPsA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                }
                alt=""
              />
              <FontAwesomeIcon icon={faCamera} />
            </div>
          </label>
          <input
            type="file"
            accept=".png, .jpg, .jpeg, .gif"
            id="upload-button"
            onChange={selectPhoto}
          />
          <button className="btn btn-primary">Upload</button>
        </div>
        <div className="form-fields">
          <Input
            onChange={handleInputChange}
            placeholder="Enter your first name"
            name="firstName"
            label="First Name"
            type="text"
            value={formData.firstName}
          />
          <Input
            onChange={handleInputChange}
            placeholder="Enter your last name"
            name="lastName"
            label="Last Name"
            type="text"
            value={formData.lastName}
          />
          <TextArea
            onChange={handleInputChange}
            placeholder="Enter your bio"
            name="bio"
            label="Bio"
            value={formData.bio}
          />
          <Input
            onChange={handleInputChange}
            placeholder="Enter your email"
            name="email"
            label="Email"
            type="email"
            value={formData.email}
          />
          <Button className="btn-primary" onClick={() => {}}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
