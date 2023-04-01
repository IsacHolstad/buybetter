import {createSlice} from "@reduxjs/toolkit";
import {setError} from './errorSlice';

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        singleProduct: [],
    },
    reducers: {
        SET_PRODUCT: (state, action) => {
            state.products = action.payload;
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
    try {
        const response = await fetch('https://api.noroff.dev/api/v1/online-shop');
        const data = await response.json();
        dispatch(SET_PRODUCT(data));
        //dispatch(setLoadingState(false));
    } catch (e) {
        dispatch(setError(true, e.message))
    }
}

export const getSingleProductById = (id) => async dispatch => {
    dispatch(SET_SINGLE_PRODUCT({}));
    let response;
    try {
        response = await fetch(`https://api.noroff.dev/api/v1/online-shop/${id}`);
        const data = await response.json();
        dispatch(SET_SINGLE_PRODUCT(data));
    } catch (e) {
        console.log(e.message)
    }
}
