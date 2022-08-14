import { ADDPRODUCT, ADD_SUCCES, ADD_FAIL, GETPRODUCT, PRODUCT_DELETE, DELETE_SUCCES, DELETE_FAIL, EDIT_PRODUCT, EDIT_SUCCES, EDIT_FAIL} from "./actionTypes"
import axios from 'axios';

export const addProd = (newProduct) => async(dispatch) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: token,
        }
    }
    dispatch ({
        type: ADDPRODUCT
    })
    try {
        const res = await axios.post('/product/addProduct', newProduct, config);
        dispatch ({
            type: ADD_SUCCES,
            payload: res.data
        });
        
    } catch (error) {
        console.log(error.response.data.errors.map(el=>el.msg))
        dispatch({

            type: ADD_FAIL,
            payload: error.response.data
        });
        alert(error.response.data.errors.map(el=>el.msg));
    }
};

export const getProduct = () => async(dispatch) => {
    try {
        const res = await axios.get('/product/productList');
        console.log(res.data)
        dispatch ({
            type: GETPRODUCT,
            payload: res.data,
        });
    } catch (error) {
        alert(error.response.data)
    }
};

export const delProduct = (id) => async(dispatch) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: token,
        }
    }
    dispatch ({
        type: PRODUCT_DELETE,
    })
    try {
        const res = await axios.delete(`/product/delete/${id}`, config)
        dispatch({
            type: DELETE_SUCCES,
            payload: id
        })
        
    } catch (error) {
        dispatch({

            type: DELETE_FAIL,
            payload: error.response.data
        });
        alert(error.response.data);
    }
}

export const editProduct = (editedProduct) => async(dispatch) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: token,
        }
    }
    dispatch ({
        type: EDIT_PRODUCT,
    })
    try {
        const res = await axios.put(`/product/update/${editedProduct.id}`, editedProduct, config)
        console.log(res)
        dispatch({
            type: EDIT_SUCCES,
            payload: {
                id: editedProduct.id,
                product : res.data,
            }
        })
        
    } catch (error) {
        dispatch({

            type: EDIT_FAIL,
            payload: error.response.data
        });
        alert(error.response.data);
    }
}