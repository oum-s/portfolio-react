import './Contact.scss';
import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import emailjs from 'emailjs-com';
// import '..Contact';
function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rugh2rg', 'template_64rv9lk',  form.current, 'AQvwjQlL92YTS9R7-' )
    e.target.reset()
  };
  return (
    <section id="contact">
      <h5> Get in Touch</h5>
      <h3> Contact Me</h3>

      <div className='container contact__container'>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="text" name="email" placeholder='Your E-Mail' required />
          <textarea name="message" rows="7" placeholder='Your Message' required> </textarea>
          
          <button type="submit" className='btn btn--primary'>Send A Message</button>
        </form>

      </div>

      <a href="#navbar">
        <FontAwesomeIcon icon={faChevronUp} />
      </a>
      
    </section>
  );
}

export default Contact;
