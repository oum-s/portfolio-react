import './Navbar.scss';
import logo from '../../../assets/logo.jpg';
import '../Navbar/Navbar';
import { useState } from 'react';
//import { NavLink, Link} from 'react-router-dom';


function Navbar() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <div className="Navbar">
      <div className="nav-start">
        <a href="#">
          <img className='logo' src={logo} alt="oums_logo" />"
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

          {/* <li>
            <NavLink to="#home" 
              className={({ isActive }) => (isActive ? 'active' : "link")}>
              Accueil
            </NavLink>
          </li>
            
          <li>
            <NavLink to="#home" className={({ isActive }) => (isActive ? 'active' : "link")}>
              A propos
            </NavLink>
          </li>

          <li>
            <NavLink to="#skills" className={({ isActive }) => (isActive ? 'active' : "link")}>
              Compétences
            </NavLink>
          </li> */}

          {/* <li>
            <NavLink to="#contact" className={({ isActive }) => (isActive ? 'active' : "link")}>
              Contact
            </NavLink>
          </li> */}
        </ul>

      </div>

    </div>
  );
}
export default Navbar;
