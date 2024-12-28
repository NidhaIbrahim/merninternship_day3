import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    // var a = 'Nidhaa'
    var [name, setname] = useState()
    var [newval, setnewval] = useState("Alex")

    const setval = (e) => {
        console.log(e.target.value)
        setname(e.target.value)
    }

    const SubHandler = () => {
        // console.log(newval)
        setnewval(name)

    }

    return (
        <div>
            <Typography variant="h3">Welcome {newval}</Typography><br />
            <TextField variant="outlined" onChange={setval} /><br /><br />
            <Button variant="contained" color='secondary' onClick={SubHandler}>Enter</Button><br /><br />
            {/* <Typography variant='h5'>You entered: {newval}</Typography> */}

        </div>
    )
}

export default StateBasics