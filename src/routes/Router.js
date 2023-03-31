import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../components/views/Home";
import ProductDetailsPage from "../components/views/ProductDetail";
import NotFound from "../components/views/NotFound";
import CartCheckOutPage from "../components/views/CartCheckOutPage";

function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Home/>}/>
                <Route path="/product/:id" element={<ProductDetailsPage/>}/>
                <Route patch="/cart" element={<CartCheckOutPage/>}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default Router;
