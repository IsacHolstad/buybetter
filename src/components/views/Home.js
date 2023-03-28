import {useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../store/modules/productSlice";
import {Link} from "react-router-dom";
//TODO import ErrorComponent

function Home() {
    const dispatch = useDispatch();
    const {products} = useSelector(state => state.products);
    //--II-- error
    //--II-- error message
    useEffect( () => {
        dispatch(getProducts());
    }, [dispatch]);


    const memoProducts = useMemo(() => products, [products])

    return null;
}

export default Home