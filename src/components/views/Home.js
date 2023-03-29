import React from 'react';
import {useEffect, useMemo } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../store/modules/productSlice";
import ProductList from "../ProductsList";
function Home() {
    const dispatch = useDispatch();
    // TODO const {products} = useSelector(state => state.products);
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    //TODO const memoProduct = useMemo(() => products, [products])
    //Add padding and grid & colums fro how product containes will align
    return(
        <>


        </>
    )
}

export default Home;
