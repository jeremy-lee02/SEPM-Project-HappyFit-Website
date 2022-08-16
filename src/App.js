import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom'
import Home from "./pages/Home";
import Exercises from "./pages/Exercises/Exercises";
import Calculators from "./pages/Calculator/Calculators";
import AboutUs from "./pages/AboutUs/AboutUs";
import Nutritions from "./pages/Nutritions";
import Footer from "./components/Footer/Footer";
import  Register from "./pages/Register";
import  Login from "./pages/Login";
import React, {useState} from 'react'
import ScrollToTop from "./Hook/ScrollToTop";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className='min-h-screen'>
      <div>
        <Router>
          <ScrollToTop>
          <Routes>             
            <Route exact path='/' element= {<Home />} />
            <Route exact path='/Home' element= {<Home />} />
            <Route exact path='/Exercises' element= {<Exercises />} />
            <Route exact path='/Nutritions' element= {<Nutritions />} />
            <Route exact path='/Calculator' element= {<Calculators/>} />
            <Route exact path='/About%20Us' element= {<AboutUs />} />
            <Route exact path='/Register' element= {<Register />} />
            <Route exact path='/Login' element= {<Login />} />   
          </Routes>
          </ScrollToTop>
          <Nav />
          <Footer />
          <BackToTop />
        </Router>
        
      </div>  
    </div>
  );
}

export default App;
