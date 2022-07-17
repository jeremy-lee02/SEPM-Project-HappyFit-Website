import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Excercises from "./pages/Excercises";
import Calculators from "./pages/Calculators";
import AboutUs from "./pages/AboutUs";
import Nutritions from "./pages/Nutritions";


function App() {
  return (
    <div className='min-h-screen'>
      <div>
        <Router>
          <Routes>             
            <Route exact path='/' element= {<Home />} />
            <Route exact path='/Home' element= {<Home />} />
            <Route exact path='/Exercises' element= {<Excercises />} />
            <Route exact path='/Nutritions' element= {<Nutritions />} />
            <Route exact path='/Calculator' element= {<Calculators/>} />
            <Route exact path='/AboutUs' element= {<AboutUs />} />
          </Routes>
          <Nav />

        </Router>
      </div>
      <a href='/Home'><img src={require('./images/logo.jpg')}
        className ='cursor-pointer width' alt='logo' />
        </a>
        <a href='/Home'><img src={require('./images/logo.jpg')}
        className ='cursor-pointer width' alt='logo' />
        </a>
        <a href='/Home'><img src={require('./images/logo.jpg')}
        className ='cursor-pointer width' alt='logo' />
        </a>
        <a href='/Home'><img src={require('./images/logo.jpg')}
        className ='cursor-pointer width' alt='logo' />
        </a>
        <a href='/Home'><img src={require('./images/logo.jpg')}
        className ='cursor-pointer width' alt='logo' />
        </a>
        <a href='/Home'><img src={require('./images/logo.jpg')}
        className ='cursor-pointer width' alt='logo' />
        </a>
        <a href='/Home'><img src={require('./images/logo.jpg')}
        className ='cursor-pointer width' alt='logo' />
        </a>
        <a href='/Home'><img src={require('./images/logo.jpg')}
        className ='cursor-pointer width' alt='logo' />
        </a>
    </div>
  );
}

export default App;
