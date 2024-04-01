import React, { useState } from "react";
import mypic from "../Home/images/mypic.png"
import paymentCross from "../Home/images/paymentCross.png"

export default function HeroSection() {

  const [popUp, setPopUp] = useState(false);

  const popClick = () => {
    setPopUp(!popUp)
  }


    return (<>

      <section id="heroSection" className="hero--section">

        <div className="hero--section--content--box">

          <div className="hero--section--content">
            <p className="section--title"> Hey, I'm Prabhat </p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Front-end</span>{" "}
              <br />
              {/* <h2 style={{fontSize:"2.5rem", marginLeft:"3rem"}}>Developer</h2> */}
              Developer
            </h1>

            <p className="hero--section-description">
            Engineer valued for driving high-performance
             <br />
             accessible web experiences.
              <br />
              I design quality, user-friendly and scalable products regardless of stack.
            
              
            </p>
              
            
          </div>

          <button onClick={popClick} id="getInTouchID" className="btn btn-primary">Get In Touch</button>

        </div>

        <div className="hero--section--img">
          <img src={mypic} alt="Hero Section" />
        </div>

      </section>

      {popUp && (<> 
        <div className="popUp-className-head">
          <div className="popUp-className-semi">
            <b>Get in Touch With Me</b>
            <button onClick={popClick}>
              <img src={paymentCross} alt=".." />
            </button>
            <hr />
            <div className="popUp-className-inner-head">
              <b>Profile - <span> <p> React js Developer </p> </span></b> 
              <b>Name - <span> <p> Prabhat Mishra </p> </span> </b> 
              <b>Experience - <span> <p> 1.2 year </p> </span> </b>  
              <b>Email - <span> <p> iammishraprabhat@gmail.com </p> </span></b>
              <b>LinkedIn Profile - <span> <a target=".." href="https://www.linkedin.com/in/prabhat-mishra-4b2a2326b/">click here</a> </span> </b>
              <b> Call/whatsApp - <span> +91 62658-56938 </span>  </b>
              <b>whatsApp - <span> <a target=".." href="https://wa.me/6265856938"> click here </a> </span> </b>
            </div>
          </div>
        </div>
      </>) }

      </>);
  }