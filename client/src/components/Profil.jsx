import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { getProfil } from '../redux/action';
import Navbar from './Navbar';

const Profil = () => {
    const {user, isAuth} = useSelector(state=>state);
    const dispatch = useDispatch();
    useEffect(() => {
        
          dispatch(getProfil());
        
    }, [])

  return (
    <div>
        {
            !isAuth ? <Navigate to="/signin"></Navigate>
            : 
        <div>
          <Navbar/>
        <h3>Hello { user.fullName }</h3>
        </div>
    }
    </div>
  )
}

export default Profil