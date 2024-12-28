import { Button, TextField, Typography, Avatar } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
      <div>
          {/* <h1>Login page</h1> 
          Username: <input type="text" name='username' placeholder='Enter your name' required /><br/>
          Password: <input type="password" name='password' placeholder='Enter your password' required /><br />
          <input type="button" value="submit"/><br /> */}

          <Typography variant="h2" component="h2">LogIn</Typography><br />
          <center><Avatar src="Home/Desktop/Nidhaa/broken-image.jpeg" sx={{ width: 98, height: 98 }}  /></center><br/>
          <TextField label="Username" variant="outlined" /><br /><br />
          <TextField label="Password" variant="outlined" /><br /><br />
          <Button variant="contained" color='secondary'>LogIn</Button>
      </div>
  )
}

export default Login