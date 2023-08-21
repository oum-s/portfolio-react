import './Skills.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3Alt, faSquareJs, faWordpress, faPhp } from '@fortawesome/free-brands-svg-icons';
import {BiCheck} from 'react-icons/bi';
import cvImg from '../../../assets/cv__Oumi.png'
import cvPdf from '../../../assets/cv2023_.pdf';


function Skills() {
  return (
    <section id="skills" className='container'>
      <h3 className="special"> Mes compétences </h3>

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
                <h3>Compétences techniques</h3>
              </div>

              <ul className='skill_list'>
                <li>
                  <BiCheck className='skill__ list icon' /><p>Gestion de projet
</p>
                </li>
                <li>
                  <BiCheck className='skill__ list icon' />
                  <p>Veille technologique</p>
                </li>
                <li>
                  <BiCheck className='skill__ list icon' />
                  <p>Etude de marché
</p>
                </li>
                <li>
                  <BiCheck className='skill__ list icon' />
                  <p>Modification d'un thème Wordpress.</p>
                </li>

                <li>
                  <BiCheck className='skill__ list icon' />
                  <p>Rédaction d'articles</p>
                </li>
                <li>
                  <BiCheck className='skill__ list icon' />
                  <p>Référencement Naturel (SEO)</p>
                </li>
                
                <li>
                  <BiCheck className='skill__ list icon' />
                  <p>Maintien d’une communauté sur les réseaux sociaux</p>
                </li>
                <li>
                  <BiCheck className='skill__ list icon' />
                  <p>Réalisation de l' identité graphique d'un site</p>
                </li>
              </ul>
            </article>

            <article className='skill'>
              <a href={cvPdf} target="_blank" rel="noreferrer" className='skill__img'>
                <img src={cvImg} alt='cv'></img>
              </a>
            </article>
          </div>
        </div>

    </section>
  );
}

export default Skills;
