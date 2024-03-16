import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
            <Typography>
                Facebook
            </Typography> &nbsp;
            <Button variant="contained" color="success">
                <Link to={'/login'}style={{textDecoration:"none",color:"white"}}>
  Login</Link>
</Button>&nbsp;&nbsp;
<Button variant="contained" color="error">
    <Link to={'/signin'}style={{textDecoration:"none",color:"white"}}>
        Signin</Link>
</Button> &nbsp;&nbsp;
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
