import './index.css';
import HeaderNavigation from "./components/shared/HeaderNavigation";
import Loader from "./components/shared/Loader";
import Router from "./routes/Router";

function App() {
  return (
    <>
      <HeaderNavigation/>
      <Router/>
        <Loader/>

    </>
  );
}

export default App;
