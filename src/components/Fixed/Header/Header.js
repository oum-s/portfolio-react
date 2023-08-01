import './Header.scss';
import logo from '../../../assets/Oumi_icon.svg';
import './Header';
import { useState } from 'react';


function Header({show, fixed, setFixed}) {
  // useState pour repérer le lien actif dans la barre menu
  const [activeNav, setActiveNav] = useState('#');

  // position it and to make sure it only shows on screens too small to fit all of the links next to each other.
  const [isOpen, setIsOpen] = useState(false);

  // usestate pour dire que le toggle disparait par defaut , si le showtoggle est true on l'active sinon laisse à false
  const showToggle = () => setIsOpen(true);

  const hide = () => setIsOpen(false);

  // useState pour dire que le menu est fermé par défaut
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
  // Si le showLinks est a true on l'active sinon on le laisse à false
    setShowLinks(!showLinks)
  }

  return (
    // Si on a la variable showLinks true on lui met la classe show-nav sinon hide-nav
    <div className='Header'>

      <div className="nav__logo">

        <a href="/">
          <img className='logo' src={logo} alt="oums_logo" />
        </a>

      </div>

      {/* Si état où la navbar doit être fixe en lg applique la classe fixed*/}
      <div className='Navbar' id={`${fixed ? "fixed" : " "}`}>

      {/*  Ouvre le menu et affiche les liens */}
        <div className={`Navbar__container ${showLinks ? "show-nav" : "hide-nav"} `}>

          <ul className='Navbar__links'>

            <li className='Navbar__links__item slideInDown-1'> 
              {/* Pour le lien actif dans le menu ET enlever le menu toggle lors du click */}
              <a href="/" className={activeNav === '/' ? 'active' : ''} onClick={() => handleShowLinks()} onBlur={hide} onFocus={showToggle}> Accueil</a>
            </li>

            <li className='Navbar__links__item slideInDown-2'> 
              <a href="#about" onClick={() => setActiveNav('#about') & handleShowLinks() } className={activeNav === '#about' ? 'active' : ' '} onBlur={hide} onFocus={showToggle}> A propos </a> 
            </li>

            <li className='Navbar__links__item slideInDown-3'> 
              <a href="#skills" onClick={() => setActiveNav('#skills') & handleShowLinks()} className={activeNav === '#skills' ? 'active' : ' '} onBlur={hide} onFocus={showToggle}> Compétences </a> 
            </li>

            <li className='Navbar__links__item slideInDown-4'> 
              <a href="#contact" onClick={() => setActiveNav('#contact') & handleShowLinks()} className={activeNav === '#contact' ? 'active' : ' '} onBlur={hide} onFocus={showToggle}> Contact 
              </a>
            </li>

          </ul>

            {/* Navbar Burger Menu Small Screen */}
            <button className='Navbar__burger'>
              <span className='Navbar__burger__bar' onClick={ () => handleShowLinks()}></span>
            </button> 

            {/* Navbar lg */}
            <button className={`Navbar__burger__lg ${!show ? "none" : "display"} `} 
            onClick={ () => {fixed ? setFixed(false) : setFixed(true)}}
            >
              <span className='Navbar__burger__bar' onClick={ () => handleShowLinks()}></span>
            </button>
        </div>

      </div>
      

    </div>
  );
}
export default Header;