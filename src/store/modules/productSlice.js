import {createSlice} from "@reduxjs/toolkit";
import {setError} from './errorSlice';

const productSlice = createSlice({
    name: 'products',
    initialState: {
        product: [],
        singleProduct: null,
    },
    reducers: {
        SET_PRODUCT: (state, action) => {
            state.product = action.payload;
            console.log("SET PRODUCT :",SET_PRODUCT)
        },
        SET_SINGLE_PRODUCT: (state, action) => {
            state.singleProduct = action.payload;

        }
    },
})
const {SET_PRODUCT} = productSlice.actions;
const {SET_SINGLE_PRODUCT} = productSlice.actions;
export default productSlice.reducer

export const fetchProducts = () => async (dispatch) => {
    //dispatch(setLoadingState(true));
    try {
        const response = await fetch('https://api.noroff.dev/api/v1/online-shop');
        console.log("HERE ISAC",response);
        const data = await response.json();
        console.log("HERE ISAC THIS IS DATA",data);
        dispatch(SET_PRODUCT(data));
        //dispatch(setLoadingState(false));
    } catch (e) {
        console.log("HERE IS ERROR",e)
        dispatch(setError(true, e.message))
        //TODO remove log before finish
    }

}

export const singleProductById = (id) => async dispatch => {
    //dispatch(setLoadingState(true));
    dispatch(SET_SINGLE_PRODUCT({}));
    let response;
    try {
        response = await fetch(`https://api.noroff.dev/api/v1/online-shop/products/${id}`);
        const data = await response.json();
        console.log("data: ", data)
        dispatch(SET_SINGLE_PRODUCT(data));
        //dispatch(setLoadingState(false));
    } catch (e) {
        console.log("there is error happening sorry")
        console.log(e.message)
    }
    if (response.ok) {
        console.log("response is good")
    } else {
        console.log("error happening")
    }
}
