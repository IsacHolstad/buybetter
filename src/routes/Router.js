import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../components/views/Home";
import ProductDetailsPage from "../components/views/ProductDetail";
import NotFound from "../components/views/NotFound";
import CartCheckOutPage from "../components/views/CartCheckOutPage";
import ContactPage from "../components/views/ContactPage";
import ThankYouPage from "../components/views/ThankYouPage";

function Router() {
    //TODO fix routing for cart page
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Home/>}/>
                <Route path="/product/:id" element={<ProductDetailsPage/>}/>
                <Route patch="/cart" element={<CartCheckOutPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/thankyou" element={<ThankYouPage/>}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default Router;
