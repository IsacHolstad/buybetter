import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../components/views/Home";
import ProductDetailsPage from "../components/views/ProductDetail";
import NotFound from "../components/views/NotFound";
import Cart from "../components/views/Cart";
import ContactPage from "../components/views/ContactPage";
import ThankYouPage from "../components/views/ThankYouPage";

function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Home/>}/>
                <Route path="/product/:id" element={<ProductDetailsPage/>}/>
                <Route patch="/cart" element={<Cart/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/thankyou" element={<ThankYouPage/>}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </>
    );
}

export default Router;
