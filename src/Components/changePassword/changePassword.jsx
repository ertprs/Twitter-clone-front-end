import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './changePassword.scss';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';



export default function ChangePassword() {
  

  
    return (
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '40ch' },
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
          <TextField className="textField"
            id="outlined-textarea"
            label="Old Password"
            placeholder="Old Password"
            multiline
          />
       </div>
       <div className="text-field">
          <InputLabel shrink htmlFor="outlined-textarea">
          New Password
        </InputLabel>
       <TextField className="textField"
            id="outlined-textarea"
            label="New Password"
            placeholder="New Password"
            multiline
          />
       </div>
       <div className="text-field">
          <InputLabel shrink htmlFor="outlined-textarea">
          Confirm New Password
        </InputLabel>
          <TextField className="textField"
            id="outlined-textarea"
            label="Confirm New Password"
            placeholder="Confirm New Password"
            multiline
          />
       </div>
        <button className="button"> Change password</button>
        </section>
    </Box>
  );
}
