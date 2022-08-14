import { ADDPRODUCT, ADD_SUCCES, ADD_FAIL, GETPRODUCT, PRODUCT_DELETE, DELETE_SUCCES, DELETE_FAIL, EDIT_SUCCES, EDIT_FAIL, EDIT_PRODUCT} from "./actionTypes"

const init = {
    loading: false,
    errors: null,
    product: [],  
};

const productReducer = (state = init, {type,payload}) => {
    switch (type) {
        case ADDPRODUCT:
        case EDIT_PRODUCT:
            return {
                ...state, 
                loading: true,
            }
        case ADD_SUCCES:
           
            return {
                ...state, 
                loading: false, 
                product: [...state.product,payload], 
                errors: null,
            }

        case EDIT_SUCCES:   
        return {
            ...state, 
            loading: false, 
            product: state.product.map(el=>el._id === payload.id ? payload.product : el),
            errors: null,
        }
        
        case ADD_FAIL:
        case EDIT_FAIL:      
            return {
                ...state, 
                loading: false, 
                errors: payload,
            }
        case GETPRODUCT: 
            return {
                ...state,
                product: payload,
            }
        case PRODUCT_DELETE:
            return {
                ...state,
                loading: true, 
            }
        case DELETE_SUCCES:
            return {
                ...state,
                loading: false,
            }
        case DELETE_FAIL:
            return {
                ...state, 
                loading: false, 
                errors: payload,
            }
        default:
            return state;
    }
}

export default productReducer;