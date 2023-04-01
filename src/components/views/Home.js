import React from 'react';
import {useEffect, useMemo } from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {fetchProducts} from "../../store/modules/productSlice";
function Home() {
    const dispatch = useDispatch();
    const {products} = useSelector(state => state.products);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])

    const memoProducts = useMemo(() => products, [products])
    return(

        <>
            <div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="bg-white">
                        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
                                <div
                                    className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                    {memoProducts.map((product) => (
                                        <div key={product.id} className="group relative flex flex-col gap-y-3">
                                            <Link to={`product/${product.id}`}
                                                  className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                                <img src={product.imageUrl} alt={product.title}
                                                     className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                                                     loading="lazy"/>
                                            </Link>
                                            <div className="mt-4 flex justify-between">
                                                <div>
                                                    <h3 className="text-md text-gray-700 relative">
                                                        <Link to={`product/${product.id}`}>
                                                            <span aria-hidden="true" className="relative inset-0 lg:w-12"/>
                                                            {product.title}
                                                        </Link>
                                                    </h3>
                                                </div>
                                                <p className="text-sm font-medium text-gray-900 line-through px-2">NOK{product.price}</p>
                                                <p className="text-sm font-medium text-gray-900">NOK{product.discountedPrice}</p>
                                            </div>
                                            <Link to={`product/${product.id}`}
                                                  className="mt-4 py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-600 text-center">
                                                View Product
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Home;
