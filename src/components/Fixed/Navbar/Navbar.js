import './Navbar.scss';
import logo from '../../../assets/Oumi_icon.svg';
import '../Navbar/Navbar';
import { useState } from 'react';


function Navbar() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <div className="Navbar" id='navbar'>
      <div className="nav-start">
        <a href="/">
          <img className='logo' src={logo} alt="oums_logo" />
        </a>
      </div>

      <div className="nav-end">

        <ul>
          <li> 
            <a href="/" className={activeNav === '/' ? 'active' : ''}> Accueil</a>
          </li>
          <li> 
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ' '}> A propos</a> 
          </li>
          <li> <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ' '}> Compétences</a> </li>
          <li> <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ' '}> Contact </a> </li>

        </ul>

      </div>

    </div>
  );
}
export default Navbar;
