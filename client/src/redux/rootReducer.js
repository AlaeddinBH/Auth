import { combineReducers } from "redux";
import reducer from './reducer';
import productReducer from './productReducer';



const rootReducer = combineReducers({ reducer, productReducer }); 

export default rootReducer; 