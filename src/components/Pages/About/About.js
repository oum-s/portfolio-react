// import PropTypes from "prop-types";
import './About.scss';
import bgImg from '../../../assets/bgImg.jpg';

function About() {
  return (
    <section id="about" className='container'
    style={{ backgroundImage: `url(${bgImg})` }}>

      <h3>About me</h3>

        <section className="about__descr">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ipsam nisi placeat dignissimos dolorem odio error reiciendis fugit, laudantium illo obcaecati, itaque deleniti laboriosam. Aperiam labore iusto commodi asperiores omnis.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores labore debitis possimus. Eligendi neque veniam non ratione facilis quam dolorem perferendis sapiente, deleniti at ex laudantium unde quia omnis beatae! <br /><br />

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ipsam nisi placeat dignissimos dolorem odio error reiciendis fugit, laudantium illo obcaecati, itaque deleniti laboriosam. Aperiam labore iusto commodi asperiores omnis. 

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores labore debitis possimus. Eligendi neque veniam non ratione facilis quam dolorem perferendis sapiente, deleniti at ex laudantium unde quia omnis beatae!<br /><br />

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ipsam nisi placeat dignissimos dolorem odio error reiciendis fugit, laudantium illo obcaecati, itaque deleniti laboriosam. Aperiam labore iusto commodi asperiores omnis. 

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores labore debitis possimus. Eligendi neque veniam non ratione facilis quam dolorem perferendis sapiente, deleniti at ex laudantium unde quia omnis beatae!
          </p>
        </section>

      <div>
        <a href="#contact" className='btn btn--primary'>Let's talk</a>
      </div>
    </section>
  );
}

export default About;
