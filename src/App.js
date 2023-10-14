import Header from "./components/header/Header";
import Body_img from './assets/images/body_img.png'
import './App.css'
import Router from "./router/router";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div>
      <img src={Body_img} className="body_img" alt="" />
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
