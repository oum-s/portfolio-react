import './Navbar.scss';
import logo from '../../../assets/Oumi_icon.svg';
import '../Navbar/Navbar';
import { useState } from 'react';

// usestate pour dire que le toggle disparait par defaut , si le showtoggle est true on l'active sinon laisse à false
function Navbar({show, setShow}) {
  // useState pour l'affichage des liens de page
  const [activeNav, setActiveNav] = useState('#');
  // useState pour dire que le menu est fermé par défaut
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    // Si le showLinks est a true on l'active sinon on le laisse à false
    setShowLinks(!showLinks)
  }

  
  
  return (
    // Si on a la variable showLinks true on lui met la classe show-nav sinon hide-nav
    <div className='Navbar'>
      <div className="nav-start">
        <a href="/">
          <img className='logo' src={logo} alt="oums_logo" />
        </a>
      </div>

      <div className={`nav-end ${showLinks ? "show-nav" : "hide-nav"} `}>

        <ul className='navbar__links'>
          <li className='navbar__item slideInDown-1'> 
            <a href="/" className={activeNav === '/' ? 'active' : ''}> Accueil</a>
          </li>

          <li className='navbar__item slideInDown-2'> 
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ' '}> A propos</a> 
          </li>

          <li className='navbar__item slideInDown-3'> <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ' '}> Compétences</a> </li>

          <li className='navbar__item slideInDown-4'> <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ' '}> Contact </a> </li>

        </ul>
      <button className='navbar__burger'>
        <span className='burger-bar' onClick={ () => handleShowLinks()}></span>
      </button>
      <button className={`navbar__burger ${show ? "none" : "display"} `} >
        <span className='burger-bar' onClick={ () => handleShowLinks()}></span>
      </button>
      </div>
      

    </div>
  );
}
export default Navbar;