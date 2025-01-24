import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[count,setCount]=useState(0)
    const intCount = () => {
        setCount(++count);
    };
    const decCount = ()=>
        setCount(--count);
  return (
    <div>
      <Typography variant='h3'>Counter</Typography>
      <Typography variant='h3'>{count}</Typography>
      <Button variant="contained" onClick={intCount}>+</Button>&nbsp;&nbsp;
      <Button variant="contained" onClick={decCount}>-</Button>
    </div>
  )
}

export default Counter
