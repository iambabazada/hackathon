import Header from "./components/header/Header";
import Body_img from './assets/images/body_img.png'
import './App.css'
import Router from "./router/router";
import Footer from "./components/footer/Footer";
import { BrowserRouter, useLocation } from "react-router-dom";

const MainContent = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/daxil-ol' || location.pathname === '/qeydiyyat'


  return (
    <div>
       {!isAuthPage && <Header />}
         <Router />
       {!isAuthPage && <Footer />}
    </div>
  )
}


function App() {
  
  return (
    <div>
      <img src={Body_img} className="body_img" alt="" />
      <BrowserRouter>
         <MainContent />
      </BrowserRouter>
    </div>
  );
}

export default App;
