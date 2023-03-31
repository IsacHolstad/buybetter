import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../components/views/Home";
import ProductDetailsPage from "../components/views/ProductDetail";
import NotFound from "../components/views/NotFound";
import CartCheckOutPage from "../components/views/CartCheckOutPage";
import ContactPage from "../components/views/ContactPage";

function Router() {
    //TODO fix routing for cart page
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Home/>}/>
                <Route path="/product/:id" element={<ProductDetailsPage/>}/>
                <Route patch="/cart" element={<CartCheckOutPage/>}/>
                <Routes path="/contact" element={<ContactPage/>}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default Router;
