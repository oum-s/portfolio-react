// import PropTypes from "prop-types";
import './About.scss';
import bgImg from '../../../assets/desk2.jpg';

function About() {
  return (
    <section id="about" 
    style={{ backgroundImage: `url(${bgImg})` }}>

      <h3>About me</h3>

        <section className="about__descr">
          <p>
          Hey, moi c'est Oumi, je suis developpeuse web, étudiante et enseignante en langues arabe à mes heures perdus. 
          Je fais partie de la vague post-covid de passionnée dans le développement web. J'ai toujours été intéressée par l'informatique en général, mais c'est seulement après deux ans dans l'enseignement et un enfant que j'ai pu avoir le courage de commencer cette aventure. <br /> <br />
          Je me considère comme une éternelle étudiante, que ça soit dans le domaine des langues, du web, de l'informatique... Tout me passionne. C'est la raison pour laquelle j'ai pu toucher à du Wordpress quand j'étais en licence, je me suis passionnée du Javascript quand j'ai entamée ma deuxième formation de développeur web et j'ai pu parcourir le php lors de mon stage chez Teenlabs. C'est donc avec enthousisame que je code et ne cesse d'apprendre le métier. 
          </p>
        </section>

      <div>
        <a href="#contact" className='btn btn--primary'>Let's talk</a>
      </div>
    </section>
  );
}

export default About;
