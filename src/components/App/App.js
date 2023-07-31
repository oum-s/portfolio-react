// import PropTypes from "prop-types";
// import { Routes, Route} from 'react-router-dom';
import './App.scss';
import Navbar from '../Fixed/Navbar/Navbar';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Skills from '../Pages/Skills/Skills';
import Contact from '../Pages/Contact/Contact';
import Footer from '../Fixed/Footer/Footer';
import { useState } from 'react';

function App() {
  /* onScroll={controlNavbar} */
    // navbar qui disparait lorsqu'on scroll
  const [show, setShow] = useState(true)
  // const controlNavbar = () => {
  //   if (window.scrollY > 100) {
  //   setShow(false)
  //   } else {
  //   setShow(true)
  //   }
  // } 

  // window.addEventListener('scroll', () => {
  //   if (window.scrollY > 100) {
  //     setShow(false)
  //     } else {
  //     setShow(true)
  //   }
  //   console.log("it's Ok");
  // })

let derniere_position_de_scroll_connue = 0;

window.addEventListener("scroll", function (e) {
  derniere_position_de_scroll_connue = window.scrollY;

  if (derniere_position_de_scroll_connue > 100) {
    setShow(false)
    } else {
    setShow(true)
  }
  console.log("it's Ok");
});


  return (
    <div className="App">
      <Navbar show={show} setShow={setShow}/>
        <Home />
        <About />
        <Skills />
        <Contact />
      <Footer />
    </div>
  );
}

export default App;
