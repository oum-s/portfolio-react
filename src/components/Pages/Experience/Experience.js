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
            <p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.  </p>
          </div>
          <div className='experience__project'>
            <div className='experience__project__cards'>
              <div 
              className="experience__project__card"
              /* id={isActive ? 'activeDiv' : 'desaDiv'} */
              /* onClick={handleClick} */>
              <img src={projet} alt='projet' />
              </div>
              <div 
              className="experience__project__card"
              /* id={isActive ? 'activeDiv' : 'desaDiv'} */
              /* onClick={handleClick} */>
                <img src={projet} alt='projet' />
              </div>
              <div 
              className="experience__project__card"
              /* id={isActive ? 'activeDiv' : 'desaDiv'} */
              /* onClick={handleClick} */>
                <img src={projet} alt='projet' />
              </div>
              <div 
              className="experience__project__card"
              /* id={isActive ? 'activeDiv' : 'desaDiv'} */
              /* onClick={handleClick} */>
                <img src={projet} alt='projet' />
              </div>
            </div>
          </div>
        </div>

    </section>
  );
}

export default Experience;
