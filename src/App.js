import React from "react";
import  Navbar  from "./components/Navbar/Navbar"
import { BrowserRouter } from "react-router-dom";
import Footer from './components/Footer/Footer'
import HomePage from "./components/MainPage/HomePage";




const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <HomePage/>
        <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;