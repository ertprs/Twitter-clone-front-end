import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './changePassword.css';
import Button from '@mui/material/Button';



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
          <TextField
            id="outlined-textarea"
            label="Old Password"
            placeholder="Old Password"
            multiline
          />
       </div>
       <div className="text-field">
          <TextField
            id="outlined-textarea"
            label="New Password"
            placeholder="New Password"
            multiline
          />
       </div>
       <div className="text-field">
          <TextField
            id="outlined-textarea"
            label="Confirm New Password"
            placeholder="Confirm New Password"
            multiline
          />
       </div>
        <button type="submit"> Change Password</button>
        </section>
    </Box>
  );
}
