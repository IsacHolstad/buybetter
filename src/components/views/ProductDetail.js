import React from 'react';
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getSingleProductById} from "../../store/modules/productSlice";
import {addSingleProductToCart} from "../../store/modules/cartSlice";

const ProductDetail = () => {
    const dispatch = useDispatch();
    const {singleProduct} = useSelector(state => state.products);
    let {id} = useParams();
    useEffect(() => {
        if (id) {
            dispatch(getSingleProductById(id))
        }
    }, [dispatch, id])

    return (<>
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                    <div className="flex flex-col-reverse">
                        <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                            <div className="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
                                <button id="tabs-1-tab-1"
                                        className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                                        aria-controls="tabs-1-panel-1" role="tab" type="button">
                                    <span className="sr-only"> Angled view </span>
                                    <span className="absolute inset-0 overflow-hidden rounded-md"></span>
                                    <span
                                        className="ring-transparent pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                                        aria-hidden="true"></span>
                                </button>
                            </div>
                        </div>
                        <div className="aspect-h-1 aspect-w-1 w-full">
                            <div id="tabs-1-panel-1" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabIndex="0">
                                <img
                                    src={singleProduct.imageUrl}
                                    alt={singleProduct.title}
                                    className="h-full w-full object-cover object-center sm:rounded-lg"/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{singleProduct.title}</h1>
                        <div className="mt-3">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl tracking-tight text-gray-900 line-through">{singleProduct.price}</p>
                            <p className="text-3xl tracking-tight text-gray-900">{singleProduct.discountedPrice}NOK</p>
                        </div>
                        <div className="mt-3">
                            <h3 className="sr-only">{singleProduct.rating}</h3>
                        </div>
                        <div className="mt-6">
                            <div className="space-y-6 text-base text-gray-700">
                                <p>{singleProduct.description}</p>
                            </div>
                        </div>
                        <form className="mt-6">
                            <div className="sm:flex-col1 mt-10 flex">
                                <button type="button"
                                        className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 py-3 px-8 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                        onClick={() => dispatch(addSingleProductToCart(singleProduct))}>
                                    Add to cart
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
)};

export default ProductDetail;
