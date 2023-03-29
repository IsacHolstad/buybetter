import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from '@reduxjs/toolkit';
import productSlice from './modules/productSlice';
import loaderSlice from "./modules/loaderSlice";
//import cartSlice
//import errorSlice

const reducer = combineReducers({
    product: productSlice,
    loading: loaderSlice,
    //cart: cartSlice,
    //error: errorSlice
})
const index = configureStore({
    reducer,
})
export default index;
