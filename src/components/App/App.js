import './App.scss';
import Header from '../Fixed/Header/Header';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Skills from '../Pages/Skills/Skills';
import Contact from '../Pages/Contact/Contact';
import Footer from '../Fixed/Footer/Footer';
import { useState } from 'react';

function App() {
  // useState lié au scroll
  const [show, setShow] = useState(false)

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
    } else {
      setShow(true)
    }
  });
  

  return (
    <div className="App">
      <Header setShow={setShow} show={show} showLinks={showLinks} setShowLinks={setShowLinks}/>
        <Home />
        <About showLinks={showLinks}/>
        <Skills />
        <Contact />
      <Footer />
    </div>
  );
}

export default App;
