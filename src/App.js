import Header from "./components/header/Header";
import Body_img from './assets/images/body_img.png'
import './App.css'
import Router from "./router/router";


function App() {
  return (
    <div>
      <img src={Body_img} className="body_img" alt="" />
      <Header />
      <Router />
      <footer>
        footer
      </footer>
    </div>
  );
}

export default App;
