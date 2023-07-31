import './Navbar.scss';
import '../Navbar/NavbarMenu';

function NavbarMenu({showLinks}) {
  // useState pour l'affichage des liens de page
  const [activeNav, setActiveNav] = useState('#');
  // useState pour dire que le menu est fermé par défaut
  const [showLinks, setShowLinks] = useState(false);
return(
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

  </div>
)
}

export default NavbarMenu;