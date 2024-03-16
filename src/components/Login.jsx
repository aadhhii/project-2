import { TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div style={{paddingTop:"80px"}}>
      <TextField id="filled-basic" label="Username" variant="filled" /><br/>
      <TextField id="filled-basic" label="Email" variant="filled" /><br/>
      <TextField id="filled-basic" label="Password" variant="filled" /><br/>
    </div>
  )
}

export default Login
