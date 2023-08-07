import './Footer.scss';
import '../Footer/Footer';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <ul className='permalinks'>
        <li> <a href='/'>Home</a></li>
        <li> <a href='#About'>About</a></li>
        <li> <a href='#Skills'>Skills</a></li>
        <li> <a href='#Contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/oumiy/'><FaLinkedin/></a>
        <a href='https://twitter.com/oumisalam'><FaTwitter/></a>
        <a href='https://github.com/oum-s'><FaGithub/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; All rights reserved </small>
      </div>
      
    </footer>
  );
}

export default Footer;
