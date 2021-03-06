import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from "../redux/action";

const Navbar = () => {
  const { isAuth } = useSelector(state=>state)  
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
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          {
            isAuth ? <Button color="inherit" onClick={HandelsignOut}>Sign Out</Button>
            : <Button color="inherit" onClick={handleSignIn}>Sign In</Button>
          }
          
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar