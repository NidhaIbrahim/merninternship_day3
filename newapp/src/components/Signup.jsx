import { Button, TextField, Typography, Avatar } from '@mui/material'
import React from 'react'

function Signup() {
  return (
      <div>
          {/* <Typography variant="h1" component="h2">Sign Up</Typography> */}
          <Typography variant="h2" component="h2">Sign Up</Typography><br />
          <center><Avatar src="Home/Desktop/Nidhaa/broken-image.jpeg" sx={{ width: 98, height: 98 }}  /></center><br/>
          <TextField label="Username" variant="outlined" /><br /><br />
          <TextField label="Password" variant="outlined" /><br /><br />
          <Button variant="contained" color='secondary'>Sign Up</Button>
    </div>
  )
}

export default Signup
