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
import Profile from './pages/Profile'
import Schedule from './pages/Schedule'
import BeginnerWorkout from './pages/BeginnerWorkout'
import Home2 from "./pages/Home2";
function App() {
  return (
    <div className='min-h-screen bg-gray-800'>
      <div>
        <Router>
          <ScrollToTop>
          <Nav />
          <Routes>             
            <Route exact path='/' element= {<Home />} />
            <Route exact path='/Home' element= {<Home />} />
            <Route exact path='/Exercises' element= {<Exercises />} />
            <Route exact path='/Nutritions' element= {<Nutritions />} />
            <Route exact path='/Calculator' element= {<Calculators/>} />
            <Route exact path='/About%20Us' element= {<AboutUs />} />
            <Route exact path='/Register' element= {<Register />} />
            <Route exact path='/Login' element= {<Login />} />
            <Route exact path='/Profile' element= {<Profile/>} />   
            <Route exact path='/Schedule' element= {<Schedule/>} />
            <Route exact path='/Beginner%20Workout' element= {<BeginnerWorkout/>} />
          </Routes>
          </ScrollToTop>
          <Footer />
          <BackToTop />
        </Router>
      </div>  
    </div>
  );
}

export default App;
