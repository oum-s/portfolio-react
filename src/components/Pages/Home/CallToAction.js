import React from "react";
import CV from '../../../assets/cvOumi_2022.pdf'
import './Home.scss';

function CallToAction() {
  return (
    <div className="cta">
      
      <a href={CV} className="btn "> Downald CV </a>

      <a href="#contact" className="btn btn--primary"> Let's talk </a>

    </div>
  )
}

export default CallToAction;