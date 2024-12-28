import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [count, setcount] = useState(0)
    
    const Increment = () => {
        setcount(count + 1)
    }
    
    const Decrement = () => {
        setcount(count - 1)
    }

  return (
    <div>
        <Typography variant='h3'>{count}</Typography><br />
          <Button variant='contained' color='secondary' onClick={Increment}>Increment</Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant='contained' color='secondary' onClick={Decrement}>Decrement</Button>
          
    </div>
  )
}

export default Counter