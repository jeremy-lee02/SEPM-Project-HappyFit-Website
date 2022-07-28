import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Exercises from "./pages/Exercises/Exercises";
import Calculators from "./pages/Calculators";
import AboutUs from "./pages/AboutUs/AboutUs";
import Nutritions from "./pages/Nutritions";
import Footer from "./components/Footer";


function App() {
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
          </Routes>
          <Nav />
        </Router>
        <Footer />
      </div>  
    </div>
  );
}

export default App;
