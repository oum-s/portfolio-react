import './Experience.scss';
import projet from './../../../assets/cdp.png';
import { useState } from 'react';



function Experience() {
  let experienceCard = document.getElementsByClassName('experience__project__card')

  const [isActive, setIsActive] = useState(false);
  
  console.log(isActive, 'active')
  
  /* const handleClick = (e) => {
    setIsActive(!isActive)
    experienceCard.add('activeDiv')
    console.log("clicked")
  } */
  return (
    <section id="Experience" className='container'>
      <h3 className="special"> Mes projets </h3>

        <div className='experience'>
          <div className='experience__descr'>
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
                  className="experience__project__card up"
                  /* id={isActive ? 'activeDiv' : 'desaDiv'} */
                  /* onClick={handleClick} */>
                  {/* <img src={projet} alt='projet' /> */}
                  </div>
                  <div className='hidden__card  up'>
                    <h1>I M HERE GUYSSSS</h1>
                  </div>
                </div>
                
              </div>

              <div className='experience__project__cards__ctn--2'>

                <div className='experience__project__cards__ctn--2__column--1'>
                      <div 
                      className="experience__project__card alone"
                      /* id={isActive ? 'activeDiv' : 'desaDiv'} */
                      /* onClick={handleClick} */>
                      {/* <img src={projet} alt='projet' /> */}
                      </div>
                      <div className='hidden__card alone'>
                      <h1>I M HERE GUYSSSS</h1>
                      </div>
                </div>

                <div className='experience__project__cards__ctn--2__column--2'>

                  <div className='hideAndSeek'>
                    <div 
                    className="experience__project__card clmn first"
                    /* id={isActive ? 'activeDiv' : 'desaDiv'} */
                    /* onClick={handleClick} */>
                    {/* <img src={projet} alt='projet' /> */}
                    </div>
                    <div className='hidden__card first'>
                    <h1>I M HERE GUYSSSS</h1>
                  </div>
                  </div>
                  <div className='hideAndSeek'>
                    <div 
                    className="experience__project__card clmn second"
                    /* id={isActive ? 'activeDiv' : 'desaDiv'} */
                    /* onClick={handleClick} */>
                    {/* <img src={projet} alt='projet' /> */}
                    </div>
                    <div className='hidden__card second'>
                    <h1>I M HERE GUYSSSS</h1>
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
