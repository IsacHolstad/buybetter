import React from 'react';
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {removeSingleProductFromCart} from "../../store/modules/cartSlice"

const Cart = () => {
    const dispatch = useDispatch();
    const {productsInCart} = useSelector(state => state.cart);
    console.log(productsInCart)
    return (
        <div>
            <h1>hello</h1>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {productsInCart.length > 0 ? <div className="flex h-full flex-col overflow-y-scroll bg-white">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                            <h2 className="text-lg font-medium text-gray-900"
                                id="slide-over-title">Shopping cart</h2>
                        </div>

                        <div className="mt-8">
                            <div className="flow-root">
                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                    {productsInCart.map((product, index) => (
                                        <li key={index} className="flex py-6">
                                            <div
                                                className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                <img
                                                    src={productsInCart.imageUrl}
                                                    alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                                    className="h-full w-full object-contain object-center"/>
                                            </div>

                                            <div className="ml-4 flex flex-1 flex-col">
                                                <div>
                                                    <div
                                                        className="flex justify-between text-base font-medium text-gray-900">
                                                        <h3>
                                                            <Link to="/">{productsInCart.title}</Link>
                                                        </h3>
                                                        <p className="ml-4">NOK{productsInCart.price}</p>
                                                    </div>
                                                    <p className="mt-1 text-sm text-gray-500">{productsInCart.brand}</p>
                                                </div>
                                                <div
                                                    className="flex flex-1 items-end justify-between text-sm">
                                                    {productsInCart.id}
                                                    <div className="flex">
                                                        <button type="button"
                                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                onClick={()=> dispatch(removeSingleProductFromCart(productsInCart.id))}
                                                        >Remove
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>$262.00</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at
                            checkout.</p>
                        <div className="mt-6">
                            <a href="#"
                               className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                                or
                                <button type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Continue Shopping
                                    <span aria-hidden="true"> &rarr;</span>
                                </button>
                            </p>
                        </div>
                    </div>
                </div> : <div className="bg-white p-8 rounded-lg shadow-lg">
                    <p className="text-gray-600 text-xl mb-4">Cart is empty</p>
                    <Link to="/" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Add Item</Link>
                </div>
                }
            </div>
        </div>
    );
};

export default Cart;
