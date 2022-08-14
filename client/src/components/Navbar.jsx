import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from "../redux/action";

import Sidebar from "./Sidebar"

const Navbar = () => {
   
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleSignIn = () => {
    
    navigate('/signin', {replace: true});
  };

  const HandelsignOut = () => {
    navigate('/', {replace: true});
    dispatch(logoutUser());
  }

  

  return (
    <div>
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} height= '100%' overflow= 'auto' />
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          {
            localStorage.getItem('token') ? <Button color="inherit" onClick={HandelsignOut}>Sign Out</Button>
            : <Button color="inherit" onClick={handleSignIn}>Sign In</Button>
          }
          
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar