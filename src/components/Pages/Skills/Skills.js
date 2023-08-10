import './Skills.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3Alt, faSquareJs, faWordpress, faPhp } from '@fortawesome/free-brands-svg-icons';
import {BiCheck} from 'react-icons/bi';


function Skills() {
  return (
    <section id="skills" className='container'>
      <h3 className="special"> What Skills I have </h3>

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
                  <p>Etudes de marché
</p>
                </li>
                <li>
                  <BiCheck className='skill__ list icon' />
                  <p>Modification d'un thème Wordpress.</p>
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
                  <p>Rédaction d'articles</p>
                </li>
                <li>
                  <BiCheck className='skill__ list icon' />
                  <p>Référencement Naturel (SEO)</p>
                </li>
                <li>
                  <BiCheck className='skill__ list icon' />
                  <p>Optimisation d'un site via le plugin Rank Math</p>
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
          </div>
        </div>

    </section>
  );
}

export default Skills;
