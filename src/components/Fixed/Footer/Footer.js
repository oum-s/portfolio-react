import './Footer.scss';
import '../Footer/Footer';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/oumiy/'><FaLinkedin className='social__icons'/></a>
        <a href='https://twitter.com/oumisalam'><FaTwitter className='social__icons'/></a>
        <a href='https://github.com/oum-s'><FaGithub className='social__icons'/></a>
      </div>

      <ul className='permalinks'>
        <li> <a href='#Header'>Accueil</a></li>
        <li> <a href='#about'>A propos</a></li>
        <li> <a href='#skills'>Compétences</a></li>
        <li> <a href='#Experience'>Expériences</a></li>
        <li> <a href='#contact'>Contact</a></li>
      </ul>
      {/* <div className='footer__copyright'>
        <small>&copy; All rights reserved </small>
      </div> */}
      
    </footer>
  );
}

export default Footer;
