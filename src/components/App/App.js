// import PropTypes from "prop-types";
// import { Routes, Route} from 'react-router-dom';
import './App.scss';
import Navbar from '../Fixed/Navbar/Navbar';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Skills from '../Pages/Skills/Skills';
import Contact from '../Pages/Contact/Contact';
import Footer from '../Fixed/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
          <Home />
          <About />
          <Skills />
          <Contact />
      <Footer />
    </div>
  );
}

export default App;
