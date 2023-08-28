import './TestH.scss';
import logo from '../../../assets/Oumi_icon.svg'

function TestH({sia, setSia, aka, setAka}) {



  return (
    <div className='parent1'>

      <div className='parent2'>

        <a className='logoLink' href="#Header">
          <img className='logo' src={logo} alt="oums_logo" />
        </a>

        <button 
          className={`Icon__burger ${aka && 'Icon__burger__block'}  ${!sia && 'close'}`}
          onClick={ () => {
            setSia(false)
            if(sia === true){
              setSia(false)
            }
            if(sia===false){
              setSia(true)
            }
          }}
        >
            <span className='Icon__burger__bar'></span>
        </button> 

        <nav
          className={`nav ${sia ? "nav__none" : "nav__block"}`}
        >
          <ul className='Navbar__links'>

            <a href="#Header" className='slideInDown-1'> 
              <li> Accueil</li>
            </a>

            <a href="#about" className='slideInDown-2'> 
              <li> À propos </li> 
            </a>

            <a href="#skills" className='slideInDown-3'> 
              <li> Compétences </li> 
            </a>

            <a href="#Experience" className='slideInDown-4'> 
              <li> Expériences </li> 
            </a>

            <a href="#contact" className='slideInDown-5'> 
              <li> Contact 
              </li>
            </a>

          </ul>


        </nav>

          

      </div>

    </div>
  );
}
export default TestH;