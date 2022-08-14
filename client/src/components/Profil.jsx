import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { getProfil } from '../redux/action';
import "./Profil.css"
import Navbar from './Navbar';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Profil = () => {
    const {user, isAuth,loading} = useSelector(state=>state.reducer);
    const dispatch = useDispatch();
    useEffect(() => {
        
          dispatch(getProfil());
        
    }, [])

  return (
    <div>
        {
          loading? 
          <>   
          <Box sx={{ display: 'flex' }}>
          <CircularProgress />
          </Box>
          </>
            :
            !isAuth ? <Navigate to="/signin"></Navigate>
            : 
    <div>
          <Navbar/>
        
        <div class="container rounded bg-white mt-5 mb-5">
          <div class="row">
            <div class="col-md-3 border-right">
              
            </div>
            <div class="col-md-6 border-right">
              <div class="p-3 py-5">
                
                <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                <img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
                <span class="font-weight-bold">{ user.fullName }</span>
                <span class="text-black-50">{ user.email }</span>
                <span> </span>
                
              </div>            
              </div>
            </div>
            
          </div>
        </div>
    </div>
  }
    </div>
    
  )
  }


export default Profil