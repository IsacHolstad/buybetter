import {Route, Routes} from "react-router-dom";
import Home from '../components/views/Home';
//import ProductDetail from "../components/views/ProductDetail";
// import cart ceheckout page
// import contact page
// import page not found page

function Router () {
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/*<Route path="/products" element={<Home/>}/>*/}
            </Routes>
        </>
    )
}
export default Router;