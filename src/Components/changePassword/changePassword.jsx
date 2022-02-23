import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./changePassword.scss";
import InputLabel from "@mui/material/InputLabel";
import axios from "axios";

export default function ChangePassword() {
  const [formData, setFormData] = useState({
    previousPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  function changePassword(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData.newPassword);
    try {
      const { data } = await axios({
        url: "http://localhost:3000/api/v1/reset/changepassword",
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxQGdtYWlsLmNvbSIsImlhdCI6MTY0NTU3Mjk2OCwiZXhwIjoxNjQ1NTkwOTY4fQ.--sLrU1YJcl35VYfgufsAsycKYc-4c7xjjM097hF6JU",
        },
        data:formData,
      });
      setFormData(
        {previousPassword: "",
        newPassword: "",
         confirmNewPassword: ""
        })
        alert("password successfully changed")
      console.log(data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "40ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <section className="container">
        <h1 className="header"> Change Password </h1>
        <div className="text-field">
          <InputLabel shrink htmlFor="outlined-textarea">
            Old Password
          </InputLabel>
          <TextField
            className="textField"
            id="outlined-textarea"
            label="Old Password"
            placeholder="Old Password"
            name="previousPassword"
            onChange={changePassword}
            value={formData.previousPassword}
            multiline
          />
        </div>
        <div className="text-field">
          <InputLabel shrink htmlFor="outlined-textarea">
            New Password
          </InputLabel>
          <TextField
            className="textField"
            id="outlined-textarea"
            label="New Password"
            placeholder="New Password"
            name="newPassword"
            onChange={changePassword}
            value={formData.newPassword}
            multiline
          />
        </div>
        <div className="text-field">
          <InputLabel shrink htmlFor="outlined-textarea">
            Confirm New Password
          </InputLabel>
          <TextField
            className="textField"
            id="outlined-textarea"
            label="Confirm New Password"
            placeholder="Confirm New Password"
            name="confirmNewPassword"
            onChange={changePassword}
            value={formData.confirmNewPassword}
            multiline
          />
        </div>
        <button className="button"> Change password</button>
      </section>
    </Box>
  );
}
