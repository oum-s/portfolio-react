// import '../Home/Home';
import './Home.scss';
import CallToAction from './CallToAction';
import myPhoto from "../../../assets/I-Oum's.png";

function Home() {
  return (
    <div className="Home container">
      <div className='myPhoto'>
        <img src={myPhoto} alt='myPhoto' />
      </div>

      <div className='myDescr'>
        <h1>Hello, I'm Oumi</h1>
        <h3 className='text-light'>I'm a Web Developer</h3>

        <CallToAction />
      </div>

    <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>
  );
}

export default Home;
