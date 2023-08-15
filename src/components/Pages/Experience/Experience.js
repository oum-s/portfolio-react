import './Experience.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import projetTL from './../../../assets/project__teenlabs.png';
import projetOC from '../../../assets/project__kasaa.jpg';
import projetSkyblog from '../../../assets/project__skyblog.jpg';
import projetOC2 from '../../../assets/project__bookifr.png';
import logoOC from '../../../assets/OC_logo.png';
import logoTL from '../../../assets/teenlabs-logo.jpg';
import logoSky from '../../../assets/skyblog--logo.png';





function Experience() {
  
  return (
    <section id="Experience" className='container'>
      <h3 className="special"> Mes projets </h3>

        <div className='experience'>
          <div className='experience__descr' >
            <div className='experience__descr__row'>
              <div className='experience__descr__row__date'>
                <p>2022</p>
              </div>
              <div className='experience__descr__row__dtl'>
                <h4>OPENCLASSROOMS  </h4>
                <p>TITRE RNCP — DÉVELOPPEUSE WEB/WEB MOBILE DE NIVEAU BAC+2 (FULLSTACK)<br /> <br />
                   Avril 2022 à Novembre 2022</p>
              </div>
            </div>
            <div className='experience__descr__row'>
              <div className='experience__descr__row__date'>
                <p>2022</p>
              </div>
              <div className='experience__descr__row__dtl'>
                <h4>OPENCLASSROOMS  </h4>
                <p>TITRE RNCP — DÉVELOPPEUSE WEB/WEB MOBILE DE NIVEAU BAC+2 (FULLSTACK)<br /> <br />
                   Avril 2022 à Novembre 2022</p>
              </div>
            </div>
            <div className='experience__descr__row'>
              <div className='experience__descr__row__date'>
                <p>2022</p>
              </div>
              <div className='experience__descr__row__dtl'>
                <h4>OPENCLASSROOMS  </h4>
                <p>TITRE RNCP — DÉVELOPPEUSE WEB/WEB MOBILE DE NIVEAU BAC+2 (FULLSTACK)<br /> <br />
                   Avril 2022 à Novembre 2022</p>
              </div>
            </div>
          </div>
          <div className='experience__project'>
            <div className='experience__project__cards'>
              <div className='experience__project__cards__ctn--1'>
                <div className='experience__project__cards__ctn--1__row'>
                  <div 
                  className="experience__project__card up">
                    <img src={projetTL} alt='projet' /> 
                  </div>
                  <div className='hidden__card  up'>
                    <div className='hidden__card__img'>
                      <img src={logoTL} alt='teenlabs__logo'></img>
                    </div>
                    <h5>Teenlabs</h5>
                    <p>Langages utilisés: PHP/MySQ</p>
                    <a href="/">
                      <FontAwesomeIcon className='faLink' icon={faLink} />
                    </a>
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
                        <a href="https://github.com/oum-s/skyblog/deployments/github-pages">
                          <FontAwesomeIcon className='faLink' icon={faLink} />
                        </a>
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
                      <a href="https://github.com/oum-s/P5-Kanap">
                          <FontAwesomeIcon className='faLink' icon={faLink} />
                      </a>
                    </div>
                  </div>
                  <div className='hideAndSeek'>
                    <div 
                    className="experience__project__card clmn second">
                    <img src={projetOC2} alt='projet__oc' /> 
                    </div>
                    <div className='hidden__card second'>
                      <div className='hidden__card__img oc'>
                        <img src={logoOC} alt='openclassrooms__logo'></img>
                      </div>
                      <h5>OPENCLASSROOMS</h5>
                      <p>Langage utilisé: HTML/SCSS</p>
                      <a href="https://github.com/oum-s/P2-BookiFr/deployments/github-pages">
                          <FontAwesomeIcon className='faLink' icon={faLink} />
                      </a>
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
<div class="relative">This div element has position: relative;

    <div class="absolute one">This div element has position: absolute;
    </div>

    <div class="hidden absolute">This div element should be the same as Absolute except hidden.
    </div>

</div>
export default Experience;
