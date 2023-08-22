import React from "react";
import mypic from "../Home/images/mypic.png"

export default function HeroSection() {

    return (

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

          <button className="btn btn-primary">Get In Touch</button>
        </div>

        <div className="hero--section--img">
          <img src={mypic} alt="Hero Section" />
        </div>

      </section>

    );
  }