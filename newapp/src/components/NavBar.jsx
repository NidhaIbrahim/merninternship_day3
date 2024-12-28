import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
    return (
        <div>
            <AppBar color="secondary">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Link to='/' sx={{ flexGrow:1 }}>
                        <Button variant="text" sx={{ color: 'white' }}><MenuIcon /> </Button>
                    </Link>
                    <Typography variant="h6" component="h6" sx={{ flexGrow: 1 }}>Fernando</Typography>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <Link to='/login'>
                            <Button variant="text" sx={{ color: 'white' }}>Login</Button>
                        </Link>
                        <Link to='/signup'>
                            <Button variant="text" sx={{ color: 'white' }}>Sign Up</Button>
                        </Link>
                        <Link to='/table'>
                            <Button variant="text" sx={{ color: 'white' }}>Dessert Menu</Button>
                        </Link>
                        <Link to='/state'>
                            <Button variant="text" sx={{ color: 'white' }}>State</Button>
                        </Link>
                        <Link to='/counter'>
                            <Button variant='text' sx={{ color: 'white' }}>Counter</Button>
                        </Link>
                        <Link to='/welcome'>
                            <Button variant='text' sx={{ color: 'white' }}>Welcome</Button>
                        </Link>
                        <Link to='/api'>
                            <Button variant='text' sx={{ color: 'white' }}>API</Button>
                        </Link>
                        <Link to='/product'>
                            <Button variant='text' sx={{ color: 'white'}}>Card</Button>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;
