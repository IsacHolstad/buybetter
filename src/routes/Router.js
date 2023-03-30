import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../components/views/Home";
import ProductDetailsPage from "../components/views/ProductDetail";
import NotFound from "../components/views/NotFound";

function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Home/>}/>
                <Route path="/product/:id" element={<ProductDetailsPage/>}/>

                {/*ONLY MATCH THIS WHEN NO OTHER ROUTES IS VALID MATCH*/}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default Router;
