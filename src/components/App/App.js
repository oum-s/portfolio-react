import './App.scss';
// import Header from '../Fixed/Header/Header';
import TestH from '../Fixed/TestH/TestH';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Skills from '../Pages/Skills/Skills';
import Experience from '../Pages/Experience/Experience';
import Contact from '../Pages/Contact/Contact';
import Footer from '../Fixed/Footer/Footer';
import { useState } from 'react';

function App() {
  // useState pour repérer le lien actif dans la barre menu
  const [activeNav, setActiveNav] = useState('#');
  // useState lié au scroll
  const [show, setShow] = useState(false)
  
  // apparaitre et disparaitre la nav
  const [sia, setSia ] = useState(false)
  // apparaître le burger__lg 
  const [aka, setAka] = useState(false)


  // useState lié au onClick de la nav en lgScreen
  /* const [fixed, setFixed] = useState(false); */
   // useState pour dire que le menu est fermé par défaut
   const [showLinks, setShowLinks] = useState(false);
  let scrollPosition = 0;
  // Si on dépasse 100px dans la position l'état est true 
  window.addEventListener("scroll", function (e) {
    scrollPosition = window.scrollY;
    setShowLinks(false)
    if (scrollPosition < 100) {
      setShow(false);
      setSia(false);
      setAka(false)
    } else {
      setShow(true)
      setSia(true)
      setAka(true)
    }
  });
  

  return (
    <div className="App">
      <TestH sia={sia} setSia={setSia} aka={aka} setAka={setAka}/>
        {/* <div className='containerSnap'> */}
          {/* <Header setShow={setShow} show={show} showLinks={showLinks} setShowLinks={setShowLinks} activeNav={activeNav} setActiveNav={setActiveNav}/> */}
          <Home />
        {/* </div> */}
          <About showLinks={showLinks}/>
          <Skills  />
          <Experience />
          <Contact activeNav={activeNav} setActiveNav={setActiveNav}/>
        <Footer />
    </div>
  );
}

export default App;
