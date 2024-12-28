import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Welcome = () => {
    var [name, setname] = useState()

    const Display = () => {
        setname("Nidha")
    }

    const Display2 = () => {
        setname("Fervin")
    }

    const Display3 = () => {
        setname("Rahma")
    }

    // useEffect(() => {}, [])

    useEffect(() => {
        Display2()
    }, [])

  return (
      <div>
          <Typography variant='h3'>Welcome { name }</Typography><br />
          <Button variant='contained' color='secondary' onClick={Display}> Nidhaa </Button>&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant='contained' color='error' onClick={Display2}> Fervin </Button>&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant='contained' color='secondary' onClick={Display3}> Rahma </Button>
    </div>
  )
}

export default Welcome