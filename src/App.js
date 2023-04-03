import './index.css';
import HeaderNavigation from "./components/shared/HeaderNavigation";
import Loader from "./components/shared/Loader";
import Router from "./routes/Router";
import {useSelector} from "react-redux";
import Footer from "./components/shared/Footer";

function App() {
    const {isLoading} = useSelector(state => state.loader)
  return (
    <>
      <HeaderNavigation/>
      <Router/>
        {isLoading && <Loader/>}
      <Footer/>
    </>
  );
}

export default App;
