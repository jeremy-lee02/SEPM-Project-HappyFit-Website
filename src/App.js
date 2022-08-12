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

function App() {
  const isLogin = true
  return (
    <div className='min-h-screen'>
      <div>
        <Router>
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
          <Nav />
          <Footer />
        </Router>
      </div>  
    </div>
  );
}

export default App;
