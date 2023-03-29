import './index.css';
import HeaderNavigation from "./components/shared/HeaderNavigation";
import Loader from "./components/shared/Loader";
import Router from "./routes/Router";
import {useSelector} from "react-redux";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <>
      <HeaderNavigation/>
      <Router/>
      <Footer/>

    </>
  );
}

export default App;
