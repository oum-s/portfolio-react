import './Experience.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import projetOMC from './../../../assets/ohmycode__-min.png'
import projetTL from './../../../assets/project__teenlabs-min.png'
import projetOC from '../../../assets/projet__kasaa-min.jpg';
import projetSkyblog from '../../../assets/skyblog__-min.png'
import logoOC from '../../../assets/OC_logo-min.png';
import logoTL from '../../../assets/teenlabs-logo-min.jpg';
import logoOMC from '../../../assets/logo--oh-mycode-min.png';
import logoSky from '../../../assets/skyblog--logo-min.png';





function Experience() {
  
  return (
    <section id="Experience">
      <h3 className="special container"> Mes projets </h3>

        <div className='experience'>
          <div className='experience__descr' >
            <div className='experience__descr__row'>
              <div className='experience__descr__row__date'>
                <p>2022</p>
              </div>
              <div className='experience__descr__row__dtl'>
                <h4>OPENCLASSROOMS  </h4>
                <p>TITRE RNCP — DÉVELOPPEUSE WEB/WEB MOBILE DE NIVEAU BAC+2 (FULLSTACK)</p>
                <p>Avril 2022 à Novembre 2022</p>
              </div>
            </div>
            <div className='experience__descr__row'>
              <div className='experience__descr__row__date'>
                <p>2021</p>
              </div>
              <div className='experience__descr__row__dtl'>
                <h4> WEBFORCE 3  </h4>
                <p>CERTIFICATION PROFESSIONNEL — DÉVELOPPEUSE WEB/WEB MOBILE JUNIOR DE NIVEAU BAC+2 (FULLSTACK)</p>
                <p>Avril 2021 à Juillet 2021</p>
              </div>
            </div>
            <div className='experience__descr__row'>
              <div className='experience__descr__row__date'>
                <p>2017</p>
              </div>
              <div className='experience__descr__row__dtl'>
                <h4>SORBONNE-NOUVELLE  </h4>
                <p>LICENCE — LANGUES, LITTÉRATURES ET CIVILISATIONS ÉTRANGÈRES ET RÉGIONALES
                   ARABE </p>
                <p>Octobre 2014 À Août 2017</p>
              </div>
            </div>
          </div>
          <div className='experience__project'>
            <div className='experience__project__cards'>
              <div className='experience__project__cards__ctn--1'>
                <div className='experience__project__cards__ctn--1__row'>
                  <div 
                  className="experience__project__card up">
                    <img src={projetOMC} alt='projet__ohmycode' /> 
                  </div>
                  <div className='hidden__card  up'>
                    <div className='hidden__card__img'>
                      <img src={logoOMC} alt='ohmycode__logo'></img>
                    </div>
                    <h5>Ohmycode</h5>
                    <p>Langages utilisés: HTML/CSS</p>
                    <div className='exp__btn'>
                    <a href="https://oum-s.github.io/ohmycode/">
                      <FontAwesomeIcon className='faLink' icon={faLink} />
                    </a>
                    </div>
                    
                  </div>
                </div>
                
              </div>

              <div className='experience__project__cards__ctn--2'>

                <div className='experience__project__cards__ctn--2__column--1'>
                      <div 
                      className="experience__project__card alone">
                      <img src={projetSkyblog} alt='skyblog' /> 
                      </div>
                      <div className='hidden__card alone'>
                        <div className='hidden__card__img'>
                          <img src={logoSky} alt='skyblog__logo'></img>
                        </div>
                        <h5>Skyblog</h5>
                        <p>Langages utilisés: HTML/CSS</p>
                        <div className='exp__btn'>
                          <a href="https://github.com/oum-s/skyblog/deployments/github-pages">
                            <FontAwesomeIcon className='faLink' icon={faLink} />
                          </a>
                        </div>
                        
                      </div>
                </div>

                <div className='experience__project__cards__ctn--2__column--2'>

                  <div className='hideAndSeek'>
                    <div 
                    className="experience__project__card clmn first">
                    <img src={projetOC} alt='projet__oc' /> 
                    </div>
                    <div className='hidden__card first'>
                      <div className='hidden__card__img oc'>
                        <img src={logoOC} alt='oopenclassrooms__logo'></img>
                      </div>
                      <h5>OPENCLASSROOMS</h5>
                      <p>Langage utilisé: React</p>
                      <div className='exp__btn'>
                        <a href="https://github.com/oum-s/P5-Kanap">
                          <FontAwesomeIcon className='faLink' icon={faLink} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='hideAndSeek'>
                    <div 
                    className="experience__project__card clmn second">
                    <img src={projetTL} alt='projet__teenlabs' /> 
                    </div>
                    <div className='hidden__card second'>
                      <div className='hidden__card__img oc'>
                        <img src={logoTL} alt='TEENLABS__logo'></img>
                      </div>
                      <h5>Teenlabs</h5>
                      <p>Langage utilisé: PHP/MySQL</p>
                      <div className='exp__btn'>
                        <a href="https://github.com/oum-s/tl_essai">
                            <FontAwesomeIcon className='faLink' icon={faLink} />
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
                
              </div>
              
            </div>
          </div>
        </div>

    </section>
  );
}
export default Experience;
