import './Skills.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3Alt, faSquareJs, faWordpress, faPhp } from '@fortawesome/free-brands-svg-icons';
import {BiCheck} from 'react-icons/bi';


function Skills() {
  return (
    <section id="skills" className='container'>
      <h5> What Skills I have</h5>

        <div className='skills container'>
          <div className='skills__langages'>
            <FontAwesomeIcon icon={faHtml5} />
            <FontAwesomeIcon icon={faCss3Alt} />
            <FontAwesomeIcon icon={faSquareJs} />
            <FontAwesomeIcon icon={faReact} />
            <FontAwesomeIcon icon={faWordpress} />
            <FontAwesomeIcon icon={faPhp} />
          </div>

          <div className='skills__content'>
            <article className='skill'>
              <div className='skill__head'>
                <h3>Web Development</h3>
              </div>

              <ul className='skill_list'>
                <li>
                  <BiCheck className='skill__ list icon' /><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </li>
                <li>
                  <BiCheck className='skill__ list icon' />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </li>
                <li>
                  <BiCheck className='skill__ list icon' />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </li>
                <li>
                  <BiCheck className='skill__ list icon' />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </li>
                <li>
                  <BiCheck className='skill__ list icon' />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </li>
              </ul>
            </article>

            <article className='skill'>
              <div className='skill__head'>
                <h3>Creation Content</h3>
              </div>

              <ul className='skill_list'>
                <li>
                  <BiCheck className='skill__ list icon' />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </li>
                <li>
                  <BiCheck className='skill__ list icon' />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </li>
                <li>
                  <BiCheck className='skill__ list icon' />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </li>
                <li>
                  <BiCheck className='skill__ list icon' />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </li>
                <li>
                  <BiCheck className='skill__ list icon' />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </li>
              </ul>
            </article>
          </div>
        </div>

    </section>
  );
}

export default Skills;
