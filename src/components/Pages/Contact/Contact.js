import './Contact.scss';
import {useState} from 'react'
import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import emailjs, { send, sendForm } from 'emailjs-com';

  // maitriser l'underline des liens de nav
function Contact({activeNav, setActiveNav}) {
    
  /* const handleActiveNav = () => {
    activeNav(current => !current)
  } */
    // montrer le bouton topscroll seulement après 400px
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


  const form = useRef();
  const sendEmail = (e) => {
    /* e.preventDefault();
  */
    emailjs.sendForm('service_rugh2rg', 'template_64rv9lk',  form.current, 'AQvwjQlL92YTS9R7-' )
    e.target.reset()
  };

  // REGEX

 /*  const Controlled = () => {
    return <input value="controlled" />;
    return <input value={value} onChange={(e) => setValue(e.target.value)} />;
  };
  
  const Uncontrolled = () => {
    return <input defaultValue={'Uncontrolled'} />;
  }; */
  const [errors, setErrors] = useState({ name: null, email: null });
  const onSubmit = (e) => {
    const name = form.elements.name.value;
    const email = form.elements.email.value;

    let errors = { name: null, email: null };

    if (!name) errors.name = 'Name is required';

    if (!email) errors.email = 'Email is required';

    // email length
    if (email.length > 50) errors.email = 'Email is too long';

    if (email.length < 5) errors.email = 'Email is too short';

    if (errors.name || errors.email) {
      setErrors(errors);
      return;
    }
  }
   

  

  const [name, setName] = useState('');
  const [email, setEmail] = useState(''); 
/*
    // const [email, setEmail] = useState('');
    // const [name, setName] = useState('');
    // const [nameErr, setNameErr] = useState('');
    // const [emailErr, setEmailErr] = useState('');

    // const validEmail = new RegExp('^([a-zA-Z0-9.]{2,})+@([a-zA-Z0-9.]{2,})+[.]+([a-zA-Z0-9-]{2,20})$');
    // const validName = new RegExp("^[a-zA-Z-'.\u00C0-\u00FF]*$");

    // const validate = () => {
    //   if (!validEmail.test(email)) {
    //     setEmailErr(true);
    //   }
    //   if (!validName.test(name)) {
    //       setNameErr(true);
    //   }
    // }

    */

  return (
    <section id="contact">
      <h3 className='special'> Get in Touch</h3>

      <div className='container contact__container'>

        <form ref={form} onSubmit={sendForm}>
          {/* <input type="text" name="name" placeholder='Nom' value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="text" name="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          <textarea name="message" rows="7" placeholder='Your Message' required> </textarea> */}
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="text" name="email" placeholder='Your E-Mail' required />
          <textarea name="message" rows="7" placeholder='Your Message' required> </textarea>
          
          <button type="submit" className='btn btn--primary' onClick={onSubmit}>Send A Message</button>
        </form>
        
      </div>

      <section className={`fa-chevron-up ${showTopBtn ? " " : "noBtn"}`}>
            {" "}
            {showTopBtn && (
            <FontAwesomeIcon
            icon={faChevronUp} 
              onClick={()=> scrollToTheTop()}
              />
              )}{" "}
      </section>
      
    </section>
  );
}

export default Contact;
