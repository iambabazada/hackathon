import Header from "./components/header/Header";
import Body_img from './assets/images/body_img.png'
import './App.css'


function App() {
  return (
    <div>
      <img src={Body_img} className="body_img" alt="" />
      <Header />
    </div>
  );
}

export default App;
