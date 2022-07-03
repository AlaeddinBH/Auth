import { LOGIN, LOGIN_FAIL, LOGIN_SUCCES, LOGOUT, PROFIL, PROFIL_FAIL, PROFIL_SUCCES, REGISTER, REGISTER_FAIL, REGISTER_SUCCES } from "./actionTypes"
import axios from 'axios';


export const regUser = (newUser) => async(dispatch) => {
    dispatch ({
        type: REGISTER
    })
    try {
        const res = await axios.post('/user/register', newUser);
        dispatch ({
            type: REGISTER_SUCCES,
            payload: res.data
        });
        
    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response.data
        });
    }
}

export const loginUser = (user) => async(dispatch) => {
    dispatch({
        type: LOGIN,
    })
    try {
       const {data} = await axios.post('/user/login', user);
       localStorage.setItem('token',data.token);
       dispatch({
        type: LOGIN_SUCCES,
        payload: data,
       })
        
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data
        });
    }
}

export const getProfil = () => async(dispatch) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: token,
        }
    }
    dispatch({
        type: PROFIL,
    })
    try {
        const {data} = await axios.get('/user/auth', config);
        dispatch({
            type: PROFIL_SUCCES,
            payload: data

        })
        
    } catch (error) {
        dispatch({
            type: PROFIL_FAIL,
            payload: error.response.data
        });
    }
}

export const logoutUser = () => async(dispatch) => {
    localStorage.removeItem("token");
    dispatch({
        type: LOGOUT,
    })
}