import {LOGIN, LOGIN_FAIL, LOGIN_SUCCES, LOGOUT, PROFIL, PROFIL_FAIL, PROFIL_SUCCES, REGISTER, REGISTER_FAIL, REGISTER_SUCCES} from "./actionTypes";

const init = {
    loading: false,
    errors: null,
    user: [],
    token:null,
    isAuth: false,
};


const reducer = (state = init, {type,payload}) => {
    switch (type) {
        case REGISTER:
        case LOGIN:
        case PROFIL:
            return {
                ...state, 
                loading: true,
            }
        case REGISTER_SUCCES:
            return {
                ...state, 
                loading: false, 
                user: payload, 
                errors: null,
            }
        case LOGIN_SUCCES:
            return{
                ...state, 
                loading: false,
                errors:null,
                token: payload.token,
                user: payload.user,
            }
        case PROFIL_SUCCES:
            return{
                loading: false,
                user:payload,
                isAuth:true,
            }
        case REGISTER_FAIL:
        case LOGIN_FAIL:  
        case PROFIL_FAIL:  
            return {
                ...state, 
                loading: false, 
                errors: payload,
            }
        case LOGOUT: 
        return{
            ...state,
            user: null,
            isAuth: false,
        }
        default:
            return state;
    }
}

export default reducer;