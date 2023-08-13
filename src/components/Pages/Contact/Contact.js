import './Contact.scss';
import {useState} from 'react'
import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import emailjs from 'emailjs-com';

  
// const handleShowNavbar = () => {
//   // Si le showLinks est a true on l'active sinon on le laisse à false
//     setShowNavbar(!showNavbar)
//   }
// import '..Contact';
function Contact() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            setShowTopBtn(true);
        } else {
            setShowTopBtn(false);
        }
    });
  }, []);
  function scrollToTheTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const [text, setText] = useState('Your Message')
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rugh2rg', 'template_64rv9lk',  form.current, 'AQvwjQlL92YTS9R7-' )
    e.target.reset()
  };
  return (
    <section id="contact">
      <h3 className='special'> Get in Touch</h3>

      <div className='container contact__container'>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="text" name="email" placeholder='Your E-Mail' required />
          <textarea name="message" value={text} onChange={(e) => setText(e.target.value)} rows="7" placeholder='Your Message' required> </textarea>
          
          <button type="submit" className='btn btn--primary'>Send A Message</button>
        </form>

      </div>

      <section  className='fa-chevron-up'>
            {" "}
            {showTopBtn && (
            <FontAwesomeIcon icon={faChevronUp} 
              onClick={()=> scrollToTheTop() }/>
              )}{" "}
      </section>
      
    </section>
  );
}

export default Contact;
