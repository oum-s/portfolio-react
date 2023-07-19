import './Skills.scss';
import Lottie from "lottie-react";
import {BiCheck} from 'react-icons/bi';
import LangAnimation from './LangAnimation.json';
// import '../Skills/Skills';


function Skills() {
  return (
    <section id="skills" className='container'>
      <h5> What Skills I have</h5>

        <div className='skills container'>
          <div className='skills__langages'>
            <Lottie animationData={LangAnimation} />
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
