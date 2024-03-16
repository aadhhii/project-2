import { TextField } from '@mui/material'
import React from 'react'

const Signin = () => {
  return (
    <div style={{paddingTop:"80px"}}>
       <TextField id="filled-basic" label="Name" variant="filled" />
      <TextField id="filled-basic" label="Password" variant="filled" />
      <TextField id="filled-basic" label=" Confirm Password" variant="filled" />
    </div>
  )
}

export default Signin
