import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [count,setcount]=useState(0)

    const Add=()=>{
        setcount(count+1)
    }
    const Subtract=()=>{
        if(count>0){
        setcount(count-1)}
    }
        
  return (
    <div style={{paddingTop:"80px"}}>
        <Typography variant='h3'>Counter value:{count}</Typography>
        <Button variant='contained' color='success' onClick={Add}>+</Button>&nbsp;
        <Button variant='contained' color='error' onClick={Subtract}>-</Button>

    </div>
  )
}

export default Counter
